* 确保数据库已经建立
* 下载官网代码
```
git clone -b dev https://github.com/div-li/officialwebsite.git
```

* 安装依赖

```
npm install 
```

* 平行目录下载thinkjs

```
cd .. 
git clone -b es6 https://github.com/75team/thinkjs.git
npm run compile
```

* 建立软连接 

```
cd ../officialwebsite/node_modules
# 请在unix下运行
ln -s ../../thinkjs thinkjs
```

* 启动项目

```
cd ..
npm run start
```

前台: [http://localhost:1234/](http://localhost:1234/)

后台: [http://localhost:1234/admin/](http://localhost:1234/admin/)

