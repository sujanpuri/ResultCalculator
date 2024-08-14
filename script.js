let rollBox = document.querySelector('#roll_box');
let nameBox = document.querySelector('#name_box');
let sub1= document.querySelector('#sub1');
let sub2= document.querySelector('#sub2');
let sub3= document.querySelector('#sub3');
let sub4= document.querySelector('#sub4');
let sub5= document.querySelector('#sub5');

const nameList = [
    "Aishwarya Adhikari",
    "Aiswarya Pokharel",
    "Amit Khatiwada",
    "Anil Thapa",
    "Ankit Khanal",
    "Ayush Gurung",
    "Bipin Acharya",
    "Dipsan Kadarya",
    "Hridaya Dev Dhungana",
    "Kishor Parajuli",
    "Nabin Bhattarai",
    "Nirmal Dahal",
    "Nishan Gautam",
    "Pawan Khamdak",
    "Prabesh Nepal",
    "Prabidhi Pokharel",
    "Prajina Adhikari",
    "Prastav Shrestha",
    "Richa Adhikari",
    "Ritesh Raut",
    "Rohan Adhikari",
    "Roshan Nepal",
    "Roshan Raj Gurung",
    "Samisha Yonghang",
    "Samita Timsina",
    "Saurab Rajbanshi",
    "Sujan Puri",
    "Tikaram Chimariya",
    "Vishal Sharma"
];



for(let i=1; i<30; i++)
{
    let rollChild= document.createElement('input')
    rollChild.id =`roll${i}`;
    rollChild.className= "rollclass";
    rollChild.value= `${i}.`;
    rollBox.appendChild(rollChild);

    let nameChild= document.createElement('input')
    nameChild.id=`name${i}`
    nameChild.className="nameclass";
    nameChild.value= nameList[i-1];
    nameBox.appendChild(nameChild);

    let mark1= document.createElement('input')
    mark1.id=`sub1${i}`
    mark1.className="sub1";
    mark1.type="number"
    mark1.placeholder="DSA Mark"
    sub1.appendChild(mark1);

    let mark2= document.createElement('input')
    mark2.id=`sub2${i}`
    mark2.className="sub2";
    mark2.type="number"
    mark2.placeholder="NM Mark"
    sub2.appendChild(mark2);

    let mark3= document.createElement('input')
    mark3.id=`sub3${i}`
    mark3.className="sub3";
    mark3.type="number"
    mark3.placeholder="CA Mark"
    sub3.appendChild(mark3);

    let mark4= document.createElement('input')
    mark4.id=`sub4${i}`
    mark4.className="sub4";
    mark4.type="number"
    mark4.placeholder="CG Mark"
    sub4.appendChild(mark4);

    let mark5= document.createElement('input')
    mark5.id=`sub5${i}`
    mark5.className="sub5";
    mark5.type="number"
    mark5.placeholder="STAT II Mark";
    sub5.appendChild(mark5);
}

randommarks= () =>
{
    let sub1 = document.querySelectorAll('.sub1')
    let sub2 = document.querySelectorAll('.sub2')
    let sub3 = document.querySelectorAll('.sub3')
    let sub4 = document.querySelectorAll('.sub4')
    let sub5 = document.querySelectorAll('.sub5')
    
        for(let i=1; i<30; i++)
        {
            sub1[i-1].value= random();
            sub2[i-1].value= random(); 
            sub3[i-1].value= random(); 
            sub4[i-1].value= random(); 
            sub5[i-1].value= random(); 
        }
}
function random()
{
    return Math.floor(Math.random() * (60 - 20 + 1)) + 20;
}

// show

function publish()
{
    let rollShow = document.querySelector('#rollShow')
    let nameShow = document.querySelector('#nameShow')
    let totalShow = document.querySelector('#totalShow')
    let resultShow = document.querySelector('#resultShow')

    for(let i=1; i<30; i++)
    {
        let rolllist = document.createElement('ddiv')
        if (i!=4||i!=7||i!=9||i!=11||i!=16||i!=20||i!=34) {
            rolllist.innerText= i+"."
            rollShow.appendChild(rolllist);
        }

        let nameli = document.createElement('div')
        nameli.innerHTML = nameList[i-1];
        nameShow.appendChild(nameli)
        
        let totalList = document.createElement('div')

        let subjt1 = document.querySelector(`#sub1${i}`)
        let sub1val = parseInt(subjt1.value)

        let subjt2 = document.querySelector(`#sub2${i}`)
        let sub2val = parseInt(subjt2.value)
        
        let subjt3 = document.querySelector(`#sub3${i}`)
        let sub3val = parseInt(subjt3.value)
        
        let subjt4 = document.querySelector(`#sub4${i}`)
        let sub4val = parseInt(subjt4.value)
        
        let subjt5 = document.querySelector(`#sub5${i}`)
        let sub5val = parseInt(subjt5.value)
        
        markSum = sub1val + sub2val + sub3val + sub4val + sub5val;

        totalList.innerHTML = markSum;

        totalShow.appendChild(totalList)


        let perlist = document.createElement('div')

        percent = (markSum/300)*100;
        perlist.innerHTML = percent.toFixed(2)+"%";

        resultShow.appendChild(perlist);

    }
    
}