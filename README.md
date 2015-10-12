---
###开发说明

- 下载http://yunpan.cn/cHCIT9MPGSUA7 （提取码：3725）
- 下载安装virtualbox虚拟机程序
- 下载vagrant
- cd到项目目录
- 修改Vagrantfile文件box地址: `package.box`为` boxes/ubuntu/trusty64.box` 
- 启动vagrant, 连接到ssh里面
- 创建软链接

  ```bash
  ln -s  ~/node_modules/ www/officialwebsite/node_modules/
  ```
- 启动服务:

  ```bash
  node www/officialwebsite/www/index.js
  ```

- 在下载的项目目录里面初始化git，更新最新代码
