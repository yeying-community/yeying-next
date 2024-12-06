## Functions

<dl>
<dt><a href="#computeHash">computeHash(m)</a> ⇒ <code>Promise.&lt;ArrayBuffer&gt;</code></dt>
<dd><p>计算消息的哈希值</p>
</dd>
<dt><a href="#digest">digest(m)</a> ⇒ <code>Promise.&lt;String&gt;</code></dt>
<dd></dd>
<dt><a href="#_digest">_digest()</a></dt>
<dd><p>计算哈希值列表的哈希值</p>
</dd>
<dt><a href="#concat">concat(...args)</a> ⇒ <code>Uint8Array</code></dt>
<dd><p>通用格式化函数，将多个基本类型拼接为一个字符串。</p>
</dd>
<dt><a href="#composite">composite(arrays)</a> ⇒ <code>Uint8Array</code></dt>
<dd><p>将多个 Uint8Array 拼接成一个大的 Uint8Array</p>
</dd>
<dt><a href="#sign">sign(privateKey, hashBytes)</a> ⇒ <code>string</code></dt>
<dd><p>对消息的哈希值签名</p>
</dd>
<dt><a href="#verify">verify(publicKey, hashBytes, signature)</a> ⇒ <code>boolean</code></dt>
<dd><p>验证消息的哈希值签名</p>
</dd>
</dl>

<a name="computeHash"></a>

## computeHash(m) ⇒ <code>Promise.&lt;ArrayBuffer&gt;</code>
计算消息的哈希值

**Kind**: global function  

| Param | Type |
| --- | --- |
| m | <code>Uint8Array</code> \| <code>ArrayBuffer</code> | 

<a name="digest"></a>

## digest(m) ⇒ <code>Promise.&lt;String&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| m | <code>string</code> | 

<a name="_digest"></a>

## \_digest()
计算哈希值列表的哈希值

**Kind**: global function  
<a name="concat"></a>

## concat(...args) ⇒ <code>Uint8Array</code>
通用格式化函数，将多个基本类型拼接为一个字符串。

**Kind**: global function  
**Returns**: <code>Uint8Array</code> - - 拼接后的字符串。  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>any</code> | 多个基本类型的参数。 |

<a name="composite"></a>

## composite(arrays) ⇒ <code>Uint8Array</code>
将多个 Uint8Array 拼接成一个大的 Uint8Array

**Kind**: global function  
**Returns**: <code>Uint8Array</code> - 拼接后的 Uint8Array  

| Param | Type | Description |
| --- | --- | --- |
| arrays | <code>Array.&lt;Uint8Array&gt;</code> | 多个 Uint8Array 的数组 |

<a name="sign"></a>

## sign(privateKey, hashBytes) ⇒ <code>string</code>
对消息的哈希值签名

**Kind**: global function  

| Param |
| --- |
| privateKey | 
| hashBytes | 

<a name="verify"></a>

## verify(publicKey, hashBytes, signature) ⇒ <code>boolean</code>
验证消息的哈希值签名

**Kind**: global function  

| Param |
| --- |
| publicKey | 
| hashBytes | 
| signature | 

