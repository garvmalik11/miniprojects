let data =[
    {
        name:'Garv',
        age:'21'
    },
    {
        name:'Garv',
        age:'21'
    },
    {
        name:'abc'
        age:'21'
    },
    {
        name:'def'
        age:'21'
    },
    {
        name:'ghi',
        age:'21'
    },
    {
        name:'jkl',
        age:'21'
    },
    {
        name:'mno',
        age:'21'
    },
    {
        name:'Garv',
        age:'21'
    }
]

const info = document.querySelector('.info')

let details = data.map(function(){
    return{
        '<div>' + item.name
    }
})