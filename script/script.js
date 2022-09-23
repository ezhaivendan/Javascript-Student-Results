class student {
    constructor(studentArr) {
      this.studentInfo = studentArr;
    }
  
    getTamilAverage() {
      let totalTamilMarks = this.studentInfo.map(ele => ele.marks.tamil).
      reduce((acc, val) => acc + val);
      return (totalTamilMarks / studentArr.length).toFixed(2);
    }
  
    getEnglishAverage() {
      let englishMarks = this.studentInfo.map(ele => ele.marks.english).
      reduce((acc, val) => acc + val);
      return (englishMarks / studentArr.length).toFixed(2);
    }
  
    getTotalMark() {
      this.studentInfo.forEach(ele => {
        ele.total = Object.values(ele.marks).reduce((acc, val) => acc + val);
      });
    }
  
    getAverage() {
      this.studentInfo.forEach(ele => {
        ele.average = Object.values(ele.marks).reduce((acc, val) => acc + val) / 5;
      });
    }
  
    isPassOrFail(marksArr) {
      return marksArr.every(mark => mark >= 35);
    }
  
    getResult() {
      this.studentInfo.filter(ele => {
        ele.result = this.isPassOrFail(Object.values(ele.marks)) ? 'Pass' : 'Fail';
      });
    }
  
    getHeadAndSubHeadKeys(headerInfo) {
      let headers = Object.keys(headerInfo);
      let subHeaders = Object.keys(headerInfo.marks);
      headers.splice(2, 1, ...subHeaders);
      return headers.map(col => `<th>${col}</th>`).join('');
    }
  
    formTableContent(getList) {
      return getList.map(row => {
        let rowValue = Object.values(row);
        const { tamil, english, maths, science, social } = rowValue.slice(2, 3)[0];
        rowValue.splice(2, 1, tamil, english, maths, science, social);
        return `<tr>
          ${Object.values(rowValue).map(cellData => `<td>${cellData}</td>`).join('')}
        </tr                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             >`;
      }).join('');
    }
  
    getAllStdInfo() {
      this.showResult(allStdContainer);
      let tableHeader = this.getHeadAndSubHeadKeys(this.studentInfo[0]);
      let content = this.formTableContent(this.studentInfo);
      document.getElementById('showDetails').innerHTML = `<table cellpadding=0; cellspacing=0> ${tableHeader} ${content} </table>`;
    }
  
    getAllStdAvg() {
      let getAvg = this.studentInfo.map(ele => ele.average);
      return (getAvg.reduce((acc, val) => acc + val) / studentArr.length).toFixed(2);
    }
  
    getMaleStd() {
      this.showResult(maleResContainer);
      let getMaleList = this.studentInfo.filter(ele => ele.gender === 'M');
      let tableHeader = this.getHeadAndSubHeadKeys(getMaleList[0]);
      let content = this.formTableContent(getMaleList);
      document.getElementById('maleDetails').innerHTML = `<table cellpadding=0; cellspacing=0> ${tableHeader} ${content} </table>`;
    }
  
    getMaleStdAvg() {
      let getAvg = this.studentInfo.filter(ele => ele.gender === 'M').map(ele => ele.average);
      return (getAvg.reduce((acc, val) => acc + val) / getAvg.length).toFixed(2);
    }
  
    getFemaleStd() {
      this.showResult(femaleResContainer);
      let getFemaleList = this.studentInfo.filter(ele => ele.gender === 'F');
      let tableHeader = this.getHeadAndSubHeadKeys(getFemaleList[0]);
      let content = this.formTableContent(getFemaleList);
      document.getElementById('femaleDetails').innerHTML = `<table cellpadding=0; cellspacing=0> ${tableHeader} ${content} </table>`;
    }
  
    getFemaleStdAvg() {
      let getAvg = this.studentInfo.filter(ele => ele.gender === 'F').map(ele => ele.average);
      return (getAvg.reduce((acc, val) => acc + val) / getAvg.length).toFixed(2);
    }
  
    getPassCount() {
      return this.studentInfo.filter(ele => ele.result === 'Pass').length;
    }
  
    getPassList() {
      this.showResult(passContainer);
      let passList = this.studentInfo.filter(ele => ele.result === 'Pass');
      let tableHeader = this.getHeadAndSubHeadKeys(passList[0]);
      let content = this.formTableContent(passList);
      document.getElementById('passList').innerHTML = `<table cellpadding=0; cellspacing=0> ${tableHeader} ${content} </table>`;
    }
  
    getFailCount() {
      return this.studentInfo.filter(ele => ele.result === 'Fail').length;
    }
  
    getFailList() {
      this.showResult(failContainer);
      let failList = this.studentInfo.filter(ele => ele.result === 'Fail');
      let tableHeader = this.getHeadAndSubHeadKeys(failList[0]);
      let content = this.formTableContent(failList);
      document.getElementById('failList').innerHTML = `<table cellpadding=0; cellspacing=0> ${tableHeader} ${content} </table>`;
    }
  
    showResult(arg) {
      let classAppears, classCount;
      classAppears = document.querySelectorAll(".hide");
      for (classCount = 0; classCount < classAppears.length; classCount++) {
        classAppears[classCount].classList.remove('show');
      }
      let getIDClass = document.getElementById(arg.getAttribute('id')).classList;
      if (!getIDClass.contains('show')) {
        getIDClass.add('show');
      }
    }
  
    getResultbyName() {
      this.showResult(showResult);
      let inputValue = document.getElementById('getInput').value;
      let showStudentResult = this.studentInfo.filter(ele => ele.name === inputValue);
      let tableHeader = this.getHeadAndSubHeadKeys(this.studentInfo[0]);
      let content = this.formTableContent(showStudentResult);
      document.getElementById('showTableResult').innerHTML = `<table cellpadding=0; cellspacing=0>${tableHeader}  ${content} </table>`;
      // let tableHeader = this.getHeadAndSubHeadKeys(this.studentInfo[0]);
      // let content = this.formTableContent(this.studentInfo);
      // document.getElementById('showDetails').innerHTML = `<table cellpadding=0; cellspacing=0> ${tableHeader} ${content} </table>`
  
    }
  
    getTopScorere() {
      this.showResult(top3Container);
      let sortByTotal = this.studentInfo.sort((a, b) => a.total < b.total ? 1 : b.total < a.total ? -1 : 0);
      let sliceTop3 = sortByTotal.slice(0, 3);
      let tableHeader = this.getHeadAndSubHeadKeys(sliceTop3[0]);
      let content = this.formTableContent(sliceTop3);
      document.getElementById('top3Result').innerHTML = `<table cellpadding=0; cellspacing=0> ${tableHeader} ${content} </table>`;
    }
  
    getSubjectTopScorer() {
      this.showResult(subjectTopperContainer);
      let subject = ['tamil', 'english', 'maths', 'science', 'social'];
      let res1 = [];
      subject.forEach(sub => {
        let subRes = this.studentInfo.sort((a, b) => a.marks[sub] < b.marks[sub] ? 1 : b.marks[sub] < a.marks[sub] ? -1 : 0);
        let getOneRes = subRes.slice(0, 1);
        let getMark = getOneRes.map(ele => ({ subject: sub, name: ele.name, mark: ele.marks[sub] }));
        res1.push(...getMark);
      });
  
      let headers = Object.keys(res1[0]);
      let tableHeader = headers.map(col => `<th>${col}</th>`).join('');
  
      let content = res1.map(row => {
        let rowValue = Object.values(row);
        return `<tr>
           ${Object.values(rowValue).map(cellData => `<td>${cellData}</td>`).join('')}
         </tr>`;
      }).join('');
  
      document.getElementById('subjectTopper').innerHTML = `<table cellpadding=0; cellspacing=0> ${tableHeader} ${content} </table>`;
  
    }
  
    getOverAllResult() {
      this.showResult(overAllContainer);
  
      // console.log(this.studentInfo.reduce((acc, val) => {
      //   if(acc.total < val.total) {
      //     acc = val;
      //   }
      //   return acc;
      // },{total: 0}))
  
      let tableHeader = ['Students Count', 'Pass Count', 'Overall Average', 'Male Average', 'Female Average'];
      tableHeader = tableHeader.map(col => `<th>${col}</th>`).join('');
      let tableContent = [
      this.studentInfo.length,
      this.getPassCount(),
      this.getAllStdAvg(),
      this.getMaleStdAvg(),
      this.getFemaleStdAvg()
      // this.getTamilAverage(),
      // this.getEnglishAverage()
      ];
      tableContent = `<tr>${tableContent.map(row => `<td>${row}</td>`).join('')}</tr>`;
  
      document.getElementById('overAllResult').innerHTML = `<table cellpadding=0; cellspacing=0> ${tableHeader} ${tableContent} </table>`;
    }}
  
  
  let studentArr = [
  {
    name: 'Muthu',
    gender: 'M',
    marks: {
      tamil: 82,
      english: 74,
      maths: 88,
      science: 72,
      social: 90 } },
  {
    name: 'Arun',
    gender: 'M',
    marks: {
      tamil: 78,
      english: 59,
      maths: 79,
      science: 99,
      social: 82 } },
  {
    name: 'Abi',
    gender: 'F',
    marks: {
      tamil: 98,
      english: 94,
      maths: 82,
      science: 72,
      social: 86 } },
  {
    name: 'Chitra',
    gender: 'F',
    marks: {
      tamil: 57,
      english: 35,
      maths: 48,
      science: 32,
      social: 35 } },
  {
    name: 'Saravanan',
    gender: 'M',
    marks: {
      tamil: 97,
      english: 91,
      maths: 92,
      science: 83,
      social: 79 } },
  {
    name: 'Sathish',
    gender: 'M',
    marks: {
      tamil: 32,
      english: 36,
      maths: 31,
      science: 39,
      social: 44 } 
    }
];
  
  let getRes = new student(studentArr);
  let totalMark = getRes.getTotalMark();
  let average = getRes.getAverage();
  let result = getRes.getResult();
  //let allStdInfo = getRes.getAllStdInfo()
  let allStdAvg = getRes.getAllStdAvg();
  //let maleStrength = getRes.getMaleStd()
  let maleAvg = getRes.getMaleStdAvg();
  //let femaleStrength = getRes.getFemaleStd()
  let femaleAvg = getRes.getFemaleStdAvg();
  let tamilAverage = getRes.getTamilAverage();
  let englishAverage = getRes.getEnglishAverage();
  //let overAllResult = getRes.getOverAllResult()
  let passCount = getRes.getPassCount();
  //let passList = getRes.getPassList()
  let failCount = getRes.getFailCount();
  //let failList = getRes.getFailList()
  //let stdResult = getRes.getResultbyName()
  
  //console.log(stdResult);
  
  //document.querySelector("#overAllResult").innerHTML = overAllResult;
  //document.querySelector("#showDetails").innerHTML = allStdInfo;
  document.querySelector("#allStd span").innerHTML = allStdAvg;
  document.querySelector("#passCount span").innerHTML = passCount;
  //document.querySelector("#passList").innerHTML = passList;
  document.querySelector("#failCount span").innerHTML = failCount;
  //document.querySelector("#failList").innerHTML = failList;
  //document.querySelector("#maleDetails").innerHTML = maleStrength;
  document.querySelector("#maleStd span").innerHTML = maleAvg;
  //document.querySelector("#femaleDetails").innerHTML = femaleStrength;
  document.querySelector("#femaleStd span").innerHTML = femaleAvg;
  //document.querySelector("#showResult").innerHTML = stdResult;
