import {getBlockAddress, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {ServiceProvider} from "../../../src/provider/service/service";
import {toJson} from "@bufbuild/protobuf";
import {deserializeIdentityFromJson} from "@yeying-community/yeying-web3";
import {convertServiceMetadataFromIdentity} from "../../../src/provider/service/model";
import {isDeleted, isExisted, isOk} from "../../../src/common/status";
import {ServiceMetadataSchema} from "../../../src/yeying/api/service/service_pb";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_NODE),
    blockAddress: getBlockAddress(),
}

const identity = {
    "metadata": {
        "parent": provider.blockAddress.identifier,
        "version": 0,
        "network": "NETWORK_TYPE_YEYING",
        "did": "did:ethr:0x07e4:0x021b3f69cd09f19fd6e1d4099e88f8153054ffbff24d110eead9e59e892f8ccf06",
        "address": "0xde3EAAE4032d429F930dD8AFccAb8132455c9185",
        "name": "mcp",
        "description": "The network mcp service of YeYing community.",
        "code": "IDENTITY_CODE_SERVICE",
        "avatar": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzEgMjMxIj48cGF0aCBkPSJNMzMuODMsMzMuODNhMTE1LjUsMTE1LjUsMCwxLDEsMCwxNjMuMzQsMTE1LjQ5LDExNS40OSwwLDAsMSwwLTE2My4zNFoiIHN0eWxlPSJmaWxsOiNhMDkzMDA7Ii8+PHBhdGggZD0ibTExNS41IDUxLjc1YTYzLjc1IDYzLjc1IDAgMCAwLTEwLjUgMTI2LjYzdjE0LjA5YTExNS41IDExNS41IDAgMCAwLTUzLjcyOSAxOS4wMjcgMTE1LjUgMTE1LjUgMCAwIDAgMTI4LjQ2IDAgMTE1LjUgMTE1LjUgMCAwIDAtNTMuNzI5LTE5LjAyOXYtMTQuMDg0YTYzLjc1IDYzLjc1IDAgMCAwIDUzLjI1LTYyLjg4MSA2My43NSA2My43NSAwIDAgMC02My42NS02My43NSA2My43NSA2My43NSAwIDAgMC0wLjA5OTYxIDB6IiBzdHlsZT0iZmlsbDojYjM1ZjQ5OyIvPjxwYXRoIGQ9Im0xNDEuODkgMTk1YTExNC43OSAxMTQuNzkgMCAwIDEgMzggMTYuNSAxMTUuNTUgMTE1LjU1IDAgMCAxLTEyOC40NyAwIDExNC43OSAxMTQuNzkgMCAwIDEgMzgtMTYuNWwxNS43NSAxNS43NWgyMXoiIHN0eWxlPSJmaWxsOiM1NzFlNTc7Ii8+PHBhdGggZD0ibTE0Ni40IDE5Ni4xNC0xNy40IDE3LjQ0LTEuMTcgMS4xN2gtMjQuMzRsLTEuMTgtMS4xNy0xNy40My0xNy40NGMxLjQ5LTAuNDEgMy0wLjc5IDQuNTEtMS4xNGw0LjY3LTEgMTIuNzQgMTIuNzRoMTcuNjlsMTIuNzMtMTIuNzQgNC42NyAxYzEuNTIgMC4zNSAzIDAuNzMgNC41MSAxLjE0eiIgc3R5bGU9ImZpbGw6I2ZmMDsiLz48cGF0aCBkPSJtNTIuMTA3IDU3LjI5M2MtMS4zNDExIDE0LjgzOS0zLjg3MDcgNTIuNzcxIDEuMzE0NSA3Mi43MTUtMC42NzU3Mi00My44MjkgMTIuMzg5LTcwLjE3NyA2Mi4wNzgtNzAuMTg3IDQ5LjY4OSAwLjAxMDA2MSA2Mi43NTQgMjYuMzU5IDYyLjA3OCA3MC4xODcgNS4xODUyLTE5Ljk0NCAyLjY1NTYtNTcuODc2IDEuMzE0NS03Mi43MTVoLTYzLjM5My02My4zOTN6IiBzdHlsZT0iZmlsbDojMDAwOyIvPjxwYXRoIGQ9Im01Mi4zMzkgMzAuNjI5Yy0xLjM4MjUgMjQuNDQ4LTIuMTIxNiA0NS45MDUtMS40NDk3IDY2LjUxNyA5LjQ2NDMtNDguMzA0IDExMi43Ny01NC45MTYgMTI5LjIyIDAgMC42NzE5MS0yMC42MTItMC4zNzk4LTQ3LjI1Ni0xLjQ5MjgtNjYuNTE3LTMyLjI0MSAxNC4yOTYtOTEuMzQ2IDE4Ljg2MS0xMjYuMjggMHoiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+PHBhdGggZD0ibTExNS41IDI0LjkyYy0yMi4yNSAwLTQ0LjUgNC4yMjk2LTU2LjcyIDEyLjY5LTMuMzIgMi4zLTUuMDYwMiA2LjQzOTItNS41OTAzIDEwLjI2OS0wLjQ1Mjc1IDMuMjMtMC44NDA0MyA2Ljc1NjEtMS4xNzg1IDEwLjQ2MWgxMjYuOThjLTAuMzM3MDQtMy43MDQ3LTAuNzI0OTItNy4yMzA2LTEuMTc3NS0xMC40NjEtMC41MzAwOS0zLjgzMDEtMi4yNjk3LTcuOTk5Mi01LjU4OTctMTAuMjY5LTEyLjIyLTguNDYwMS0zNC40Ny0xMi42OS01Ni43Mi0xMi42OXoiIHN0eWxlPSJmaWxsOiMwMDA7Ii8+PHBhdGggZD0ibTc2LjUyMSAzOS4xMzljMjEuMjMzIDMuMzk2NSAzMy4xMTYtMTMuMzkyIDM3LjU5LTMxLjcyIDQuMzYxNCAxNy4xNTggMTQuMTc1IDM0Ljk2OCAzNi41NzcgMzEuNTg0LTMzLjkyMSAyMC41OTQtNTcuNjQ2IDExLjU5NC03NC4xNjcgMC4xMzQ1eiIgc3R5bGU9ImZpbGw6bm9uZTsiLz48cGF0aCBkPSJtMTMxLjY0IDExNC4wOSA3LjU4MDEtNy41ODAxIDcuNTgwMSA3LjU4MDFtLTYyLjYgMCA3LjU4MDEtNy41ODAxIDcuNTc5OSA3LjU4MDEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo2LjQ5OThweDtzdHJva2U6IzAwMDsiLz48cGF0aCBkPSJtMTAwLjE5IDE1Mi4wOWMyLjg3MjYgNC4wNjE2IDkuODA5NSA0LjcyMzIgMTUuMTE5LTAuNDU0MzIgNS4wNjU2IDQuNTEzNCAxMS4xNjcgNS42ODk4IDE1LjQ5NSAwLjMxNDU4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6NS44OTQ5O3N0cm9rZTojMTExOyIvPjxwYXRoIGQ9Im0xMDkuNjcgMTM1LjUzYy0wLjk3NTggMC4wNzQzLTIuMDUgMC40NTMyNy0zLjE0ODUgMC45OTQxNC00LjMyMzUgMi4xMzk5LTcuMzg2MiA0LjI1NTctMTAuNjM5IDcuMTQwNi0wLjYyNTEgMC41NzE1IDAuMTE2OCAwLjc3Nzg1IDEuNDIzOCAwLjg3MzA0IDUuNjk2NyAwLjA1MzYgMTQuMzg0IDAuNDE0MDQgMTUuMDk4LTAuODc1IDEuOTI1MS0yLjA3ODggMS43OTY5LTUuMzMwMy0wLjE4MTYtNy4zMDA4LTAuNzAxLTAuNjc1MzMtMS41NzY5LTAuOTA2MzItMi41NTI3LTAuODMyMDN6bTExLjY1NiAwYy0wLjk3NTgtMC4wNzQzLTEuODUxNyAwLjE1NjctMi41NTI3IDAuODMyMDMtMS45Nzg1IDEuOTcwNS0yLjEwNjcgNS4yMjItMC4xODE3IDcuMzAwOCAwLjcxNDIgMS4yODkgOS40MDEgMC45Mjg2IDE1LjA5OCAwLjg3NSAxLjMwNy0wLjA5NTIgMi4wNDg5LTAuMzAxNTQgMS40MjM4LTAuODczMDQtMy4yNTI0LTIuODg0OS02LjMxNTEtNS4wMDA3LTEwLjYzOS03LjE0MDYtMS4wOTg1LTAuNTQwODctMi4xNzI3LTAuOTE5ODUtMy4xNDg1LTAuOTk0MTR6IiBzdHlsZT0iZmlsbDojNjMzYjFkOyIvPjwvc3ZnPg==",
        "created": "2025-01-24T01:21:32.538Z",
        "checkpoint": "2025-01-24T01:21:32.538Z"
    },
    "blockAddress": "hCDS9jpnV6lV8i23+epYFzZYbwiCRTtZOhaPM7mJm5MQInCrGUabHHP0ZHNWrSrBrRlACqjbR4DUgCf8sM663CaPd367e2nGGBrfKIc90odeBWRu/UwbG1qFP21/jqrO+COvEwib5dRzR0Kh94+g1Iy9Rvf5UioupZPbUHzrHvbyHGzU8ZHOKgWTJ36LDvOd4Y+6ypDPxU7DEAA0cVq+DqsYnZiYax39FcJJWLdtVl2r9y3lCHsmcLyy3cAQAMEnP0jSghzBz5mITds8ritAL6sZ9wlMqvW6WEL1MzZCKkUDspkZEklHL9u8SEHWffn6jeW4lWyFimt4qETbg5ArcLBz8eq7wgPw1OsAWSAB8JSld+3bIW8A1zHE6xEQMjVzGGQgHo3oTPBxwdhMi3GcpcWqBFsG27r8r1IFST85/1dI0JoHh9Cvt7sWUIXtckFANMG3TuTsOJCwYHKo/X3EJFDkFpPFfl2lFr9UjNyt5upLUSDxoZ7z5H2w39bQHjYfu/i+ZWM=",
    "securityConfig": {"algorithm": {"name": "CIPHER_TYPE_AES_GCM_256", "iv": "+FyNfTFhGWMZUFmV"}},
    "registry": {
        "nodes": ["EOQPGioweGZjZDRDM2VmZkEwODc4N2E4YkIxNGUzMzVDY0ZEMjg4ODQzYzc3YTYiVGRpZDpldGhyOjB4MDdlNDoweDAyMzY0N2VkMDQyNDZhNDZjMTE3MTJkYTEyNTMxYzEwYmIxMjY4MmQ1ZGJmNjhjNjBmZWEzMzhiNjMxZDAwMWVlMjIEbm9kZTotVGhlIG5ldHdvcmsgbm9kZSBzZXJ2aWNlIG9mIFllWWluZyBjb21tdW5pdHkuQAFKBgoBBQcICVIVaHR0cDovL2xvY2FsaG9zdDo4NDQxWg5sb2NhbGhvc3Q6OTEwMWLyNWRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TXpFZ01qTXhJajQ4Y0dGMGFDQmtQU0pOTXpNdU9ETXNNek11T0ROaE1URTFMalVzTVRFMUxqVXNNQ3d4TERFc01Dd3hOak11TXpRc01URTFMalE1TERFeE5TNDBPU3d3TERBc01Td3dMVEUyTXk0ek5Gb2lJSE4wZVd4bFBTSm1hV3hzT2lOR1JrTXhNRGM3SWk4K1BIQmhkR2dnWkQwaWJURXhOUzQxSURVeExqYzFZVFl6TGpjMUlEWXpMamMxSURBZ01DQXdMVEV3TGpVZ01USTJMall6ZGpFMExqQTVZVEV4TlM0MUlERXhOUzQxSURBZ01DQXdMVFV6TGpjeU9TQXhPUzR3TWpjZ01URTFMalVnTVRFMUxqVWdNQ0F3SURBZ01USTRMalEySURBZ01URTFMalVnTVRFMUxqVWdNQ0F3SURBdE5UTXVOekk1TFRFNUxqQXlPWFl0TVRRdU1EZzBZVFl6TGpjMUlEWXpMamMxSURBZ01DQXdJRFV6TGpJMUxUWXlMamc0TVNBMk15NDNOU0EyTXk0M05TQXdJREFnTUMwMk15NDJOUzAyTXk0M05TQTJNeTQzTlNBMk15NDNOU0F3SURBZ01DMHdMakE1T1RZeElEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvalpESmhaRFprT3lJdlBqeHdZWFJvSUdROUltMHhOREV1TnpVZ01UazFZVEV4TkM0M09TQXhNVFF1TnprZ01DQXdJREVnTXpnZ01UWXVOU0F4TVRVdU5UTWdNVEUxTGpVeklEQWdNQ0F4TFRFeU9DNDBOaUF3SURFeE5DNDNPU0F4TVRRdU56a2dNQ0F3SURFZ016Z3RNVFl1Tld3eE5TNDNNU0F4TlM0M05XZ3lNWG9pSUhOMGVXeGxQU0ptYVd4c09pTXlNVEl4TWpFN0lpOCtQSEJoZEdnZ1pEMGliVGc1TGpJNU1TQXhPVFZoTVRFMExqYzVJREV4TkM0M09TQXdJREFnTUMwek9DNHdNRElnTVRZdU5TQXhNVFV1TlRNZ01URTFMalV6SURBZ01DQXdJRE00TGpBd01pQXhOaTQwT0RKNmJUVXlMalF6TkNBd2RqTXlMams0TW1FeE1UVXVOVE1nTVRFMUxqVXpJREFnTUNBd0lETTRMVEUyTGpRNE1pQXhNVFF1TnprZ01URTBMamM1SURBZ01DQXdMVE00TFRFMkxqVjZJaUJ6ZEhsc1pUMGlabWxzYkRvalptWm1PeUl2UGp4d1lYUm9JR1E5SW0weE5UY3VNVFVnTVRrNUxqYzFZekF1TWpVME9DQTNMalExTURFZ01TNDFOQ0F4TkM0NE5UVWdOQzQ1TlRFeUlESXhMalF6TW1FeE1UVXVOVE1nTVRFMUxqVXpJREFnTUNBd0lERTNMall4T1MwNUxqWTNPVGNnTVRFMExqYzVJREV4TkM0M09TQXdJREFnTUMweU1pNDFOeTB4TVM0M05USjZiUzA0TXk0eU9UVWdNbVV0TTJFeE1UUXVOemtnTVRFMExqYzVJREFnTUNBd0xUSXlMalUzSURFeExqYzFJREV4TlM0MU15QXhNVFV1TlRNZ01DQXdJREFnTVRjdU5qSXhJRGt1TmpjNU4yTXpMalF4TVMwMkxqVTNOalVnTkM0Mk9UUTBMVEV6TGprNElEUXVPVFE1TWkweU1TNDBNM29pSUhOMGVXeGxQU0ptYVd4c09pTXlNVEl4TWpFN0lpOCtQSEJoZEdnZ1pEMGliVGs1TGpFNU55QXlNRFF1T1RkMk1tVXRNMnd4Tmk0ek1ESWdNVFl1TXpBeElERTJMak13TVMweE5pNHpNREYyTFRKbExUTjZJaUJ6ZEhsc1pUMGlabWxzYkRvalptWm1PeUl2UGp4d1lYUm9JR1E5SW0wMU55NDFNelFnTVRReUxqQXpZeTAyTGprek9ETXRNekV1TnpVdE1DNDFOekk1TkMwMU1pNDFOemNnTVRRdU1UYzBMVFl5TGpNME5DQXlNaTQxTmpJdE1USXVNamd6SURZeUxqQTRNaTB4TWk0eU1qSWdPRE11TkRnMExURXVPRGcwTmlBeU1TNHpORGdnTVRFdU1UYzNJREl5TGpFeU5DQXpOeTR6T1RZZ01UZ3VORGs0SURZekxqY3pNeUE0TGpFeU56a3RNVFF1TVRVMUlERXpMakUyTkMwek1TNDFPVGdnTVRRdU1EZzFMVFE0TGprd01pQXhMakE0TWpndE1URXVOemsxTFRFdU1UYzFOaTB4T0M0NE5qWXROeTQwT0RNekxUSTNMamszTWkweU5pNDBOalV0TXpjdU5qZzFMVEV3TXk0ME5TMHpNUzQxTmkweE1qa3VOall0TWk0NE16Y3lMVGN1T0RVd05DQTVMalEyTVRVdE9TNDJNREEySURFM0xqUTNPQzA1TGpJM05TQXlOaTQyTmpjZ01TNHdNREkwSURFNExqWTJOeUEyTGprMk9EZ2dNemd1TlRBNElERTJMakU0SURVekxqVTBlaUlnYzNSNWJHVTlJbVpwYkd3NkkyWm1PVGd3T1RzaUx6NDhjR0YwYUNCa1BTSnRNVEV4TGpJMklETXVNRFF5TTJNdE5pNHdNVE1nTUM0eE1USTRMVEV5TGpZeU9TQXlMalk1TWpRdE1UVXVNamt4SURjdU9UQTRNaTB4TGpFMk56WWdNeTR5TXpnekxURXVOamMxT0NBMkxqSXdOamt0TVM0Mk56VTRJRGd1T0RreU5pQXdMamc1TWpJNExUQXVNalkyTVNBeExqZ3dNRFV0TUM0MU1UWTBJREl1TnpJMk5pMHdMamMwTkRFZ015NDNOVEF5TFRFdU1EWTNNaUEzTGpRNE5URXRNUzQzTVRNMUlERXhMakV5T1MweExqazVPREVnTVM0eE1EQTNMVEF1TURnMklESXVNVGsxTXkwd0xqRXpPVEVnTXk0eU56Y3pMVEF1TVRZd01XZ3laUzB6WXpVdU5qazJPUzB3TGpFeE16TWdNVEV1TURrZ01DNDJOakF6SURFMUxqa3dOQ0F5TGpBMU1qY2dNQzR3TlRVeUxUTXVNRFF5TFRBdU56QTJPVFl0TlM0NU9ESTBMVEl1TVRjek9DMDRMalV0TVM0NE5ERXhMVE11TVRVNU9TMDBMamN3TXpNdE5TNDFOVFk0TFRndU5ESTVOeTAyTGpneU5qSXRNUzQyT0RnekxUQXVORGsxTWkwekxqVXhOak10TUM0Mk5qSXROUzQwTmpnNExUQXVOakkxZW0wekxqQTJOalFnTVRjdU5EUTVZeTB3TGpZNU16RTNMVEF1TURFdE1TNHpPVEU1TFRBdU1ERXRNaTR3T1RNNElEQm9MVEpsTFROakxURXVNVFU1TVNBd0xqQXhPUzB5TGpNek1qWWdNQzR3TmpRdE15NDFNVEUzSURBdU1UTTROaTB6TGprd016VWdNQzR5TkRZdE55NDVNREkxSURBdU9EQTJNUzB4TVM0NU1pQXhMamN5T0RVdE1UVXVNVFU1SURNdU1EQTNOUzB5Tmk0ME5qa2dPUzQ1TWpjNUxUSXlMakEyT0NBeE9TNDJPRElnTWpJdU9Ea3hMVGd1TnpjM015QTFNaTR6TVRVdE1UQXVOREF6SURjMkxqQXlNeTB5TGpJeE1qa2dNaTR4TkRFMExUa3VOVFV5T1MweE5DNDVNemt0TVRrdU1EZ3hMVE0yTGpReU9DMHhPUzR6TkhvaUlITjBlV3hsUFNKbWFXeHNPaU5tWmprNE1EazdJaTgrUEhCaGRHZ2daRDBpYlRFMk5TNDJNaUF4Tmk0NU9ERmpMVEF1T0RVM05TQXdMVEV1T1RRd05pQXdMalUwTXpnNUxUTXVNelEzTmlBeExqTTFOelF0Tnk0ek16Z3lJRFF1TnpZMU1pMHhNeTQwTlRJZ01UQXVPRFkzTFRFNUxqVXhOaUF4T0M0ek5qTWdPUzR5TnpNMElESXVNVGd5TlNBeE55NDVNRE1nTlM0Mk56QTJJREkxTGpJeE15QXhNQzQyTURRZ01TNHhOVEV5TFRrdU1USTJNeUF4TGpreE16Y3RNVGd1TlRBeklEQXVNRFUxTFRJMkxqazVOaTB3TGpVM0xUSXVOREU0TkMweExqTXdNVGN0TXk0ek1qWTNMVEl1TkRBME15MHpMak15T0RGNmJTMHhNRFF1TURrZ01TNDJPVE0wWXkweExqRXdNallnTUMweExqZ3pORElnTUM0NU1URTJOUzB5TGpRd05ETWdNeTR6TXpBeExURXVPRGM1TkNBNExqVTROamt0TVM0d09EQTJJREU0TGpBM09DQXdMakE1TWlBeU55NHlPVGtnTnk0d05UVTVMVFF1TmpZek9DQXhOUzQyT0RjdE9DNHpOalkzSURJMUxqRXhNUzB4TUM0NU9EUXROaTR3TkRNdE55NDBOakF4TFRFeUxqRXpPUzB4TXk0MU16Y3RNVGt1TkRVeExURTRMakk0TlMweExqUXdOeTB3TGpneE16VXpMVEl1TkRrd01TMHhMak0yTURVdE15NHpORGMzTFRFdU16VTVOSG9pSUhOMGVXeGxQU0ptYVd4c09tNXZibVU3SWk4K1BIQmhkR2dnWkQwaWJURTJNaTQwTlNBeE5pNDJPRFpqTFRJdU16RTNOU0F5WlMweklDMDBMall5TnpZZ01DNDFOell3T0MwMkxqZzVNallnTVM0Mk5qZ3RPQzQwTnpZNElEWXVNREUxTlMweE1TNHhNVE1nTVRNdU16UTVMVEV3TGpFek15QXhPUzQzT0RjZ01UQXVNekl6SURJdU56QTNOeUF4T1M0M05qSWdOeTR3TmpVNElESTNMak0wTmlBeE15NHlOemtnT1M0NE5EZ3ROQzQ1TXpZeklERXhMak15TFRFM0xqRXpOeUEwTGpZeE5USXRNalV1T0RVeUxUUXVOekV3TkMwMkxqRXlNakl0T1M0NE16Y3hMVGd1T0RnM09DMHhOQzQ1TXpZdE9DNDRPREk0ZW0wdE9UY3VNekU0SURRdU1UTTROMk10TWk0ME5UWTVJREF1TURVMU5pMDFMakUyTkRJZ01DNDFORFEzTkMwNExqRXhOeklnTVM0MU1UYzJMVEV6TGpRNE55QTBMalEwTXpNdE1Ua3VNRFlnTWpFdU1qRTFMVE11TmpRNE5DQXpNUzQ0TkNBM0xqSTBOell0Tmk0d05qazBJREUyTGprMk1TMHhNQzQ0T1RZZ01qY3VPRGt5TFRFMExqSXlPU0F3TGpJeE9UTXRNeTR6TWpReExUQXVNekl3TVMwM0xqQTRNVGN0TVM0NE5qa3hMVEV4TGpJek5pMHlMamd3TkRrdE5DNDRORFExTFRjdU1qSXpNeTAzTGpjeU1TMHhNeTR5TWpFdE55NDRPVEEyTFRBdU16UXdPQzB3TGpBeExUQXVOamcyTVMwd0xqQXhMVEV1TURNM01TMHlaUzB6ZWlJZ2MzUjViR1U5SW1acGJHdzZibTl1WlRzaUx6NDhjR0YwYUNCa1BTSnROekF1T1RVNUlEazBMams0Tldnek5TNHdNekZqTWk0ME1EZzJJREZsTFRVZ05DNHpOakV5SURFdU9UVXlNeUEwTGpNMk1USWdOQzR6TmpBMmJDMHlMalU0TmpRZ01UY3VOVEV4WXkwd0xqTTFNVFVnTWk0ek56azVMVEV1TnpJeE9DQTBMak0yTURZdE15NDRORFUzSURRdU16WXdObWd0TXpBdU9XTXRNaTR4TWpNNUxURmxMVFVnTFRNdU9EUTFOeTB4TGprMU1qTXRNeTQ0TkRVM0xUUXVNell3Tm13dE1pNDFPRFkwTFRFM0xqVXhNV014WlMwMUlDMHlMalF3T0RJZ01TNDVOVEkyTFRRdU16WXdOaUEwTGpNMk1USXROQzR6TmpBMmVpSWdjM1I1YkdVOUltWnBiR3c2SXpBd01EdHpkSEp2YTJVdGJHbHVaV05oY0RweWIzVnVaRHR6ZEhKdmEyVXRiR2x1WldwdmFXNDZjbTkxYm1RN2MzUnliMnRsTFhkcFpIUm9Pak11TURBME5YQjRPM04wY205clpUb2pNREF3T3lJdlBqeHdZWFJvSUdROUltMHhOakF1TURVZ09UUXVPVGcxYUMwek5TNHdNekZqTFRJdU5EQTROaUF4WlMwMUlDMDBMak0yTVRJZ01TNDVOVEl6TFRRdU16WXhNaUEwTGpNMk1EWnNNaTQxT0RZMElERTNMalV4TVdNd0xqTTFNVFE1SURJdU16YzVPU0F4TGpjeU1UZ2dOQzR6TmpBMklETXVPRFExTnlBMExqTTJNRFpvTXpBdU9XTXlMakV5TXprdE1XVXROU0F6TGpnME5UY3RNUzQ1TlRJeklETXVPRFExTnkwMExqTTJNRFpzTWk0MU9EWTBMVEUzTGpVeE1XTXRNV1V0TlNBdE1pNDBNRGd5TFRFdU9UVXlOaTAwTGpNMk1EWXROQzR6TmpFeUxUUXVNell3Tm5vaUlITjBlV3hsUFNKbWFXeHNPaU13TURBN2MzUnliMnRsTFd4cGJtVmpZWEE2Y205MWJtUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9uSnZkVzVrTzNOMGNtOXJaUzEzYVdSMGFEb3pMakF3TkRWd2VEdHpkSEp2YTJVNkl6QXdNRHNpTHo0OGNHRjBhQ0JrUFNKdE9UQXVOakEzSURFd01pNHpOV0UwTGpZek16Y2dOQzQyTXpNeUlEQWdNU0F3SURRdU5qZzVNaUEwTGpZek16Y2dOQzQyTXpNM0lEUXVOak16TWlBd0lEQWdNQzAwTGpZNE9USXROQzQyTXpNM2VtMDBPUzQzTWlBd1lUUXVOak16TnlBMExqWXpNeklnTUNBeElEQWdOQzQyTkRRMElEUXVOak16TnlBMExqWXpNemNnTkM0Mk16TXlJREFnTUNBd0xUUXVOalEwTkMwMExqWXpNemQ2SWlCemRIbHNaVDBpWm1sc2JEb2pNREF3T3lJdlBqeHdZWFJvSUdROUltMDNNQzQyTmlBNU5DNDVPRFZvTFRFeExqYzNOU0lnYzNSNWJHVTlJbVpwYkd3NmJtOXVaVHR6ZEhKdmEyVXRiR2x1WldOaGNEcHliM1Z1WkR0emRISnZhMlV0YkdsdVpXcHZhVzQ2Y205MWJtUTdjM1J5YjJ0bExYZHBaSFJvT2pNdU1EQTBOWEI0TzNOMGNtOXJaVG9qTURBd095SXZQanh3WVhSb0lHUTlJbTB4TnpJdU1UTWdPVFF1T1RnMWFDMHhPUzQwT0RRaUlITjBlV3hsUFNKbWFXeHNPbTV2Ym1VN2MzUnliMnRsTFd4cGJtVmpZWEE2Y205MWJtUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9uSnZkVzVrTzNOMGNtOXJaUzEzYVdSMGFEb3pMakF3TkRWd2VEdHpkSEp2YTJVNkl6QXdNRHNpTHo0OGNHRjBhQ0JrUFNKdE1UQTVMak15SURFd05pNHlZelF1TWpBME5TMHlMalF5TnlBNUxqTXdNell0TVM0NU1UTWdNVEl1TXpVekxUQXVNREkxT0NJZ2MzUjViR1U5SW1acGJHdzZibTl1WlR0emRISnZhMlV0YkdsdVpXTmhjRHB5YjNWdVpEdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmNtOTFibVE3YzNSeWIydGxMWGRwWkhSb09qTXVNREEwTlhCNE8zTjBjbTlyWlRvak1EQXdPeUl2UGp4d1lYUm9JR1E5SW0weE5EZ3VNek1nTVRBNUxqYzVMVFV1TnpZeU5pMDRMakl6TWpRaUlITjBlV3hsUFNKbWFXeHNPbTV2Ym1VN2MzUnliMnRsTFd4cGJtVmpZWEE2Y205MWJtUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9uSnZkVzVrTzNOMGNtOXJaUzEzYVdSMGFEbzBPM04wY205clpUb2pabVptT3lJdlBqeHdZWFJvSUdROUltMHhOVFl1TWpjZ01UQTFMVEl1TkRBekxUTXVORE15T0NJZ2MzUjViR1U5SW1acGJHdzZibTl1WlR0emRISnZhMlV0YkdsdVpXTmhjRHB5YjNWdVpEdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmNtOTFibVE3YzNSeWIydGxMWGRwWkhSb09qUTdjM1J5YjJ0bE9pTm1abVk3SWk4K1BIQmhkR2dnWkQwaWJUZ3lMamMwT0NBeE1UUXVNelF0T0M0NU5EZzVMVEV5TGpjNE5DSWdjM1I1YkdVOUltWnBiR3c2Ym05dVpUdHpkSEp2YTJVdGJHbHVaV05oY0RweWIzVnVaRHR6ZEhKdmEyVXRiR2x1WldwdmFXNDZjbTkxYm1RN2MzUnliMnRsTFhkcFpIUm9PalE3YzNSeWIydGxPaU5tWm1ZN0lpOCtQSEJoZEdnZ1pEMGliVGt4TGpRd09DQXhNRGt1TnprdE5TNDNOakkyTFRndU1qTXlOQ0lnYzNSNWJHVTlJbVpwYkd3NmJtOXVaVHR6ZEhKdmEyVXRiR2x1WldOaGNEcHliM1Z1WkR0emRISnZhMlV0YkdsdVpXcHZhVzQ2Y205MWJtUTdjM1J5YjJ0bExYZHBaSFJvT2pRN2MzUnliMnRsT2lObVptWTdJaTgrUEhCaGRHZ2daRDBpYlRFeU55NDROQ0F4TkRZdU56TmpMVEl1TWpRZ09DNDVNeTAyTGpreUlERTFMakE0TFRFeUxqTTBJREUxTGpBNGN5MHhNQzR4TFRZdU1UVXRNVEl1TXpRdE1UVXVNRGg2SWlCemRIbHNaVDBpWm1sc2JEb2pNREF3TzNOMGNtOXJaUzFzYVc1bFkyRndPbkp2ZFc1a08zTjBjbTlyWlMxc2FXNWxhbTlwYmpweWIzVnVaRHR6ZEhKdmEyVXRkMmxrZEdnNk1pNDVPVGs1Y0hnN2MzUnliMnRsT201dmJtVTdJaTgrUEM5emRtYytqGDIwMjUtMDEtMTlUMDc6MzE6MTIuOTA2WnIYMjAyNS0wMS0xOVQwNzozMToxMi45MDZaeowBMzA0NDAyMjA2OTUwNmUxOWM3N2M0ZTQzZDRiYmEwMDhiODg1MWUwOTVmYTM0ODliMTQyYjE5MjIyNTM4NTkxNDUxODIxODZmMDIyMDRjYTMyMDVmNmZkZTUyNjk0ZGZiNDMxNGMxZmQ3ODhiMzM2ZmVhNmFmNWEyN2I3MzViNmY0OGYyNjQ1Zjc4ZTc="]
    },
    "signature": "3044022043ddabe5e7e5232cf67facf2bcdbf567340580551ada71913e4c2b24c6e5f96102204a0b79a4a2fe20cf458ed729b85df605eb984456518374fe9c16e62ebbc1978e",
    "serviceExtend": {
        "code": "SERVICE_CODE_MCP",
        "apis": "API_CODE_USER,API_CODE_LLM",
        "proxy": "http://localhost:8741",
        "grpc": "localhost:9401"
    }
}

describe('Service', () => {
    it('register', async () => {
        const serviceProvider = new ServiceProvider(provider)
        const metadata = convertServiceMetadataFromIdentity(deserializeIdentityFromJson(JSON.stringify(identity)))
        const body = await serviceProvider.register(metadata)
        assert.isTrue(isExisted(body.status))
        assert.deepEqual(metadata, body.service)
        console.log(`Success to register identity=${JSON.stringify(toJson(ServiceMetadataSchema, metadata))}`)
    })

    it('search', async () => {
        const serviceProvider = new ServiceProvider(provider)
        const body = await serviceProvider.search({code: ServiceCodeEnum.SERVICE_CODE_MCP}, 1, 10)
        assert.isTrue(isOk(body.status))
        const existing = body.services.find(i => {
            console.log(`Success to get node identity=${i.name}, did=${i.did}`)
            return identity.metadata.did === i.did
        })
        assert.isDefined(existing)
    })

    it('unregister', async () => {
        const serviceProvider = new ServiceProvider(provider)
        const body = await serviceProvider.unregister(identity.metadata.did, identity.metadata.version)
        assert.isTrue(isDeleted(body.status))
        console.log(`Success to unregister service=${identity.metadata.did}, version=${identity.metadata.version}`)
    })
})