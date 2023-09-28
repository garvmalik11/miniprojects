let data =[
    {
        name:'Garv',
        age:'21'
    },
    {
        name:'qwerty',
        age:'21'
    },
    {
        name:'abc',
        age:'21'
    },
    {
        name:'def',
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
    },
    {
        name:'Garv',
        age:'21'
    },
    {
        name:'Garv',
        age:'21'
    }
]

const info = document.querySelector('.info')

let details = data.map(function(item){
    return '<div>' + item.name+' is '+item.age+' years old' +'</div>';
})

// map() creates a new array from calling a function for every array element.

info.innerHTML = details.join('\n');
// The join() method returns an array as a string.
