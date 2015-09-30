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
cd .. && git clone -b es6 https://github.com/75team/thinkjs.git && npm install 
```

* 建立软连接 

```
ln -s . ../officialwebsite/node_modules/thinkjs 
```

* 启动项目
npm run start

