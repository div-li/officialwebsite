
---
###开发说明
- 下载安装[virtualbox](https://www.virtualbox.org/)
- 下载安装[vagrant](https://www.vagrantup.com/downloads.html)
- 下载项目文件 http://yunpan.cn/cFfMkACj4BkSI  访问密码 7daa
- cd到项目目录，在www目录下clone代码，此时目录结构如下
```
├── Vagrantfile
├── package.box
└── www
└──── officialwebsite
```
- 执行  ```vagrant up```
- 进入vagrant ``` vagrant ssh```
- 在虚拟机里创建软链接
```
  ln -s  ~/node_modules/ ~/www/officialwebsite/node_modules/
```
- 启动服务:

```bash
node www/officialwebsite/www/index.js
```
- 访问 http://127.0.0.1:1234
