// 存储目标：小型文本数据
// 容量限制：每个域名大约4KB
// 持久性：可以设置过期时间，没有设置时浏览器会在会话结束（即浏览器关闭）时删除
// 特点：可以用于服务器通信，每次请求都会自动携带；安全性较低，容易被捕获；注意使用`HttpOnly`和`Secure`属性。
export class CookieCache {
    set(name: string, value: string, days: number) {
        let expires = ''
        if (days) {
            const date = new Date()
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
            expires = '; expires=' + date.toUTCString()
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/'
    }

    get(name: string) {
        const nameEQ = name + '='
        const ca = document.cookie.split(';')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length)
            }

            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length)
            }
        }
        return null
    }
}
