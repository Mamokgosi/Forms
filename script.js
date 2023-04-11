function getFormValues(){
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let gender= document.getElementById("gender").value;
    let job = document.getElementById("job").value;
    let qualificication = document.getElementById("qualification").value;

    console.log(` first name: ${firstName} \n
    last name: ${lastName} \n
    gender: ${gender} \n
    job: ${job} \n
    qualification: ${qualificication}
    `);
}