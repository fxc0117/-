/**
 * Created by Rychou on 2018/4/19.
 */
import React, {Component} from  'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3'


class Main extends Component{
    state={
        date:{},
    }
    componentDidMount(){
        this.print();
        setInterval(()=>{
                this.time(2016,4,23)
            },1000
        )
        var audio = document.getElementById("audio");
        setTimeout(()=>audio.play(),8500)
    }
    print = ()=>{
        $.fn.autotype = function() {
            var _this=$(this);
            var str=_this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str=str.replace(/(\s){2,}/g,"$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args=arguments;
                var current = str.slice(index, index+1);
                // html标签完整输出,如：<p>
                if (current == '<'){
                    index = str.indexOf('>', index) + 1;
                }
                else{
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length-1){ //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                }else{
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn,200)
            };
            // 延迟1s开始
            setTimeout(timer,1000);
        };
        $("#autotype").autotype();
    }
    time =(year,month,day)=>{
        var dateNow = new Date();
        var dateJNR = new Date(year,month-1,day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR)/(24*3600*1000));
        var hour = parseInt(((dateNow - dateJNR)/(3600*1000))%24);
        var minute = parseInt((dateNow - dateJNR)/(1000*60)%60);
        var second = parseInt((dateNow - dateJNR)/1000%60);
        this.setState({date:{d:d,hour:hour,minute:minute,second:second}});
    };
    render(){
        const date =()=>{
            if (this.state.date.d!==undefined){
                const {d,hour,minute,second} = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return(
            <div className="App animated bounceInLeft">
            <div className="date">{date()}</div>
            <div id="autotype">
                   <h1 style={{fontWeight:900}}>哈喽！范仙女！</h1>
                <p >在煽情开始之前，先放首歌当背景音乐吧！Music!</p>
                <p>今天是我们一周年的纪念日，从2017年12月31日到现在，我们一起经历了许许多多的事情，
                    有欢笑也有争吵，也曾因为一些事情闹过分手，但是我们都走过来了。</p>
                <p>高三那会，每天都期待着下课，上课的时候视线会不自觉的到你身上（看看你是不是又睡觉觉了嘎嘎）；
                    晚自习的时候假装凑到你身边看看你在干啥，然后就可以和你聊天，表面上是和其他人说话，实际上啊，是因为喜欢和你呆在一起。喜欢看你的甜美的笑容，喜欢轻轻地闻你的发香，
                    慢慢地开始喜欢你身上的一切，那个物理课的晚自习，我偷偷握着你的手，整个人大脑一片空白，还要担心被别人看到，可能那个时候才知道什么是小鹿乱撞吧。
                </p>
                <p>那天晚上，小心翼翼地试探你，当我知道我喜欢的人也喜欢我的时候，我一整晚都笑的合不拢嘴，也睡不着，脑海里一直重复着那句话“本来打算高考结束和你表白的”。
                    整个人都处于一种飘飘然的状态。再到后来高考后的那个暑假，也是我一生当中最难忘的暑假，初吻、约会、嘿嘿嘿，每天都歪腻在一起，真心的感谢你陪我度过的那些时光。
                </p>
                <p>然后我们就开始了漫长的异地恋，还记得我们异地后的第一次见面嘛，本来约好7号见面的，但那天晚上你对我说“离那么远和不陪有什么区别”，我发现什么事都不能阻挡我的脚步了，我要立刻马上见到你，去他妈的异地恋，3点钟打车到四点在机场，不敢睡觉生怕误点，
                       最后在厕所睡着了，幸亏还是到了济南，满脑子都是想着你会不会不见我，当我站到济南大学新西门门口的时候，我打了电话给你，听到你的声音的那一刻，感觉之前的恶心不舒服一下子都没有了，当我打开房间门，看到你的一瞬间，我真的是开心坏了，不停的骂自己为什么不早点来看我的宝贝，
                      重新和你拥抱，和你亲吻，我终于知道自己的内心，“不是我喜欢的样子你都有，是只要是你，任何样子我都喜欢”，初听不识曲中意，再听已是曲中人。有人说：“异地恋其实并不难坚持，因为它真实地考验了
                    两个人的心”。是啊！我们异地经历的那些事，让我们能够看清对方的真心，也让我们的感情更加深厚。最近很喜欢《谁愿放手》中的一句话，“年年月月逝去越是觉得深爱你”。
                </p>
                <p>我不善于文字表达，写这一个网页和说那么多话也就想表达“我爱你”这简单的三个字而已，说煽情一点就是：“以前车马很远，书信很慢，一生只够爱一个人，很不凑巧，我骨子里有点封建，我是个小心眼，小到只能住的下你一个人，还出不来的那种，请多担待！”
                    好期待以后结束异地后的同居生活啊，希望那一天早点到来，一房两人，哦对了，还有我们可爱的猫猫（不知道是英短还是短腿还是暹罗呢）。
                </p>
                <p>最后祝可爱的范仙女一周年纪念日快乐哦！</p>
                <div style={{textAlign:'right'}}>
                    <p>爱你的♥任羽宁</p>
                    <p>2018年12月31日</p>
            </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main