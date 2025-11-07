let A,B,C;
A=[];
B=[];
C=[];
let r1,c1,r2,c2;
const paragraph=document.querySelectorAll("p");
function fun(op)
{
    const rows1=parseInt(paragraph[0].querySelectorAll("textarea")[0].value);
    const cols1=parseInt(paragraph[0].querySelectorAll("textarea")[1].value);
    const rows2=parseInt(paragraph[1].querySelectorAll("textarea")[0].value);
    const cols2=parseInt(paragraph[1].querySelectorAll("textarea")[1].value);
    r1=rows1;
    r2=rows2;
    c1=cols1;
    c2=cols2;
    if (op === "M" && cols1 !== rows2) {
        alert("Error: For multiplication, cols of A must equal rows of B");
    }
    else if ((op === "A" || op === "S") && (cols1 !== cols2 || rows1 !== rows2)) {
        alert("Error: For addition/subtraction, dimensions must be equal");
    }
    else
    {
        creatematrix(rows1,cols1,"A");
        creatematrix(rows2,cols2,"B");
        document.getElementById("button").style.display="flex";
    }
}
function activate(type)
{
    intializematrix(r1,c1,r2,c2,type);
}
function intializematrix(rows1,columns1,rows2,columns2,type)
{
  A=[];
  B=[];
  C=[];
  const matrixa=document.querySelectorAll("table")[0];
  const matrixb=document.querySelectorAll("table")[1];
  for (let i = 0; i < rows1; i++) 
    {
    let columns=[];
        for (let j = 0; j < columns1; j++)
            {
                
            columns.push(parseFloat(matrixa.rows[i].cells[j].querySelector("textarea").value));
            }
    A.push(columns);   
    }
  for (let i = 0; i < rows2; i++) 
    {
    let columns=[];
    for (let j = 0; j < columns2; j++) 
        {
        columns.push(parseFloat(matrixb.rows[i].cells[j].querySelector("textarea").value));        
         }
    B.push(columns);
}
    for (let i = 0; i < rows1; i++) 
    {
    let columns=[];
        for (let j = 0; j < columns2; j++)
            {
            columns.push(0);
            }
    C.push(columns);   
    }
    if(type==="Multiply")
    multiplymatrix(rows1,columns1,columns2);
    if(type==="ADD")
    addmatrix(rows1,columns1);
    if(type=="SUBTRACT")
    submatrix(rows1,columns1);
}
function creatematrix(rows1,cols1,letter)
{
    const div=document.getElementById("matrixcreate");
    const table=document.createElement("table");
    const heading=document.createElement("h3");
    heading.innerText=`MATRIX ${letter}`;
    div.appendChild(heading);
    div.appendChild(table);
    table.innerHTML = ""; 
    for(let i=0;i<rows1;i++)
    {
        const row=document.createElement("tr");
        for (let j = 0; j < cols1; j++) {
            const rowdata=document.createElement("td");
            const textarea=document.createElement("textarea");
            rowdata.appendChild(textarea);
            row.appendChild(rowdata);
            }
            table.appendChild(row);

    }

}
function multiplymatrix(rows1,columns1,columns2)
{
   for (let i = 0; i < rows1; i++) {
    for (let j = 0; j < columns2; j++) {
     C[i][j]=0;
       for (let k = 0; k < columns1; k++) {
      C[i][j]+=A[i][k]*B[k][j];
    
       }    
    }
    
   }
   displaymatrix(rows1,columns2);
}
function addmatrix(rows1,columns1)
{
   for (let i = 0; i < rows1; i++) {
    for (let j = 0; j < columns1; j++) {
      C[i][j]=A[i][j]+B[i][j];
    
       }    
    }
    
   
   displaymatrix(rows1,columns1);
}

function submatrix(rows1,columns1)
{
   for (let i = 0; i < rows1; i++) {
    for (let j = 0; j < columns1; j++) {
      C[i][j]=A[i][j]-B[i][j];
    
       }    
    }
    
   
   displaymatrix(rows1,columns1);
}
function displaymatrix(rows1,columns2) {
    const div=document.getElementById("matrixprint");
    div.style.display="flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.innerHTML = "";
    const heading=document.createElement("h3");
    heading.innerText="RESULTANT MATRIX";
    div.append(heading);
    const table=document.createElement("table");
    div.append(table);
    for (let i = 0; i < rows1; i++) {
        const row=document.createElement("tr");
        for (let j = 0; j < columns2; j++) {
            const columnsdata=document.createElement("td");
            columnsdata.innerText=C[i][j];
            row.append(columnsdata);
        }
       table.append(row);
    }
}
