// 页面加载完成后执行
window.onload = function() {
    // 1. 歌手卡片入场动画（滚动时触发）
    const singerCards = document.querySelectorAll('.singer-card');
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        singerCards.forEach(card => {
            // 获取卡片位置
            const cardTop = card.getBoundingClientRect().top;
            // 当卡片进入视口时添加动画
            if (cardTop < window.innerHeight * 0.8) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    });
    
    // 初始化卡片样式
    singerCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
    });
    
    // 触发一次滚动事件，让可见卡片显示
    window.dispatchEvent(new Event('scroll'));

    // 2. 导航栏高亮（根据当前页面自动激活）
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath.includes('pages/') && link.getAttribute('href').includes(currentPath.split('/')[2]))) {
            link.classList.add('active');
        }
    });

    // 3. 简单音乐播放控制（可选扩展）
    const audioPlayers = document.querySelectorAll('.audio-player');
    audioPlayers.forEach(player => {
        player.addEventListener('play', function() {
            // 暂停其他播放器
            audioPlayers.forEach(other => {
                if (other !== this && !other.paused) {
                    other.pause();
                }
            });
        });
    });
};