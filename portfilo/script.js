console.log('working');
//theme-circle

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeCircles = document.getElementsByClassName('theme-circle')


for (var i = 0; themeCircles.length > i; i++) {
    themeCircles[i].addEventListener('click', function() {
        let mood = this.dataset.mood
        console.log('Option clicked:', mood)
        setTheme(mood)
    })
}

function setTheme(mood) {
    if (mood == 'light') {
        document.getElementById('theme-style').href = './style/defualt.css'
    }

    if (mood == 'darkBlue') {
        document.getElementById('theme-style').href = './theme-style/dark-blue.css'
    }

    if (mood == 'pink') {
        document.getElementById('theme-style').href = './theme-style/pink.css'
    }

    if (mood == 'orange') {
        document.getElementById('theme-style').href = './theme-style/orange.css'
    }

    localStorage.setItem('theme', mood)
}