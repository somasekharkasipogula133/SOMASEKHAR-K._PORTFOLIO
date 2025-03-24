tailwind.config = {
    theme: {
        extend: {
            gridTemplateColumns:{
                'auto':'repeat(auto-fit,minmax(200px,1fr))'
            },
            fontFamily:{
                ovo:["Ovo","sans-serif"],
                Kalnia:["Kalnia", "serif"],
                playBall:["playBall","cursive"],
                Kings:["Kings","cursive"]
            },
            colors:{
                lightHover:"#fcf4ff",
                darkHover:"#0f0f0f",
                darkTheme:"#11001f"
            },
            boxShadow:{
                'black':'4px 4px o #000',
                'white':'4px 4px 0 #fff',
            }
        }
    },
        darkMode: 'selector',
}