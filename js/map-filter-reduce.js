const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//TODO:Use
// .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const language = users.filter(current => current.languages.length >= 3);
console.log(language);
// TODO:Use .map to create an array of strings where each element is a user's email address
const emails = users.map(current => current.email);
console.log(emails);
// TODO:Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// const years = users.reduce((total, users) => {
//     return total + users.yearsOfExperience;
// }, 0);
// console.log(years);
const totalYears = users.reduce((total,user)=> total + user.yearsOfExperience,0);
const averageYears = totalYears/ users.length;
console.log(averageYears);
// TODO:Use .reduce to get the longest email from the list of users.
const lgemail = users.reduce((accumulater, current) => {
    const currentEmail = current.email;
    if(currentEmail.length > accumulater.length){
        return currentEmail;
    }else{
        return accumulater;
    }
},"");
console.log(lgemail);
//TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const single = users.reduce(function(sentence, instructor,index,arr){
    if(index ===(arr.length -1)){
        return `${sentence}${instructor.name}.`
    }else{
        return `${sentence}${instructor.name},`
    }
},"You're instructors names are: ");
console.log(single);
//TODO:Use .reduce to get the unique list of languages from the list of users.
const unique = users.reduce(function(prev,current){
    const langs = current.languages;
    for(const lang of langs){
        prev.add(lang);
    }
    return prev;
},new Set);
console.log(unique);