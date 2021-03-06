module.exports = {
    configureWebpack:{
        devServer:{
            port:8089, //端口号
            open:true,
            // mock数据
            //mock 接口编写的地方
            //每次做更改这个配置文件的时候，都必须重启项目才会生效
            before(app){
                // app.get('请求地址',(req,res)=>{
                //     res.json({
                //     })
                // })
                //用户信息池
                let userpoor = [
                    {username:'xiaod',password:'123456'},
                    {username: 'tim',password: '123456'}
                ]
                //注册接口
                app.get('/api/register',(req,res)=>{
                    const{username,password} = req.query
                    const userlength=userpoor.filter(v=>v.username===username).length
                    if(userlength>0){
                        res.json({
                            success:false,
                            message:'用户名已存在'
                        })
                    }else{
                        res.json({
                            success:true,
                            message:'注册成功'
                        })
                    }
                })
                //登录接口
                let tokenkey = 'xdclass'
                app.get('/api/login',(req,res)=>{
                    const {username,password} = req.query
                    if(username=='xiaod' && password=='123456' ||  username=='tim' && password=='123456'){
                        res.json({
                            code:0,
                            message:'登录成功',
                            token:tokenkey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
                        })
                    }else{
                        res.json({
                            code:1,
                            message:'账号或密码错误'
                        })
                    }
                })
                // 首页轮播图数据接口
                app.get('/api/banner',(req,res)=>{
                    res.json({
                        data:[
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                            },
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                            },
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                            }
                        ]
                    })
                })
                app.get('/api/rollimglist',(req,res)=>{
                    res.json({
                        data:[
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                                label:'分类1'
                            },
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                label:'分类1'
                            },
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                                label:'分类1'
                            },
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                                label:'分类1'
                            },
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                label:'分类1'
                            },
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                                label:'分类1'
                            }
                        ]
                    })
                })
            }
        }
    },
    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
