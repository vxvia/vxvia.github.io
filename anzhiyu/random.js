var posts=["undefined/文章/你好/","undefined/游戏/RPG/魔法少女频道/","undefined/游戏/RPG/魔法少女伊尔斯特拉/","undefined/游戏/RPG/转生勇者传说/","undefined/文章/查找游戏/","undefined/网络/分享/关于分享/","undefined/网络/工具/虚空终端使用教程/","undefined/游戏/RPG/萨布丽娜和无力的灵魂/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };