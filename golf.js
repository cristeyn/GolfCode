const golfGame = () =>{
    let input = document.getElementById('myInput').value;
    let name = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
    const golfScore = (par,stroke) => {
        return (stroke == 1) ?
           document.getElementById("golf").innerHTML = name[0]:
        (stroke <= par-2) ?
            document.getElementById("golf").innerHTML = name[1]:
        (stroke == par-1) ?
            document.getElementById("golf").innerHTML = name[2]:
        (stroke == par) ?
            document.getElementById("golf").innerHTML = name[3]:
        (stroke == par+1) ?
            document.getElementById("golf").innerHTML = name[4]:
        (stroke == par+2) ?
            document.getElementById("golf").innerHTML = name[5]:
            document.getElementById("golf").innerHTML = name[6];
        }
        result = golfScore(4,input);
        document.querySelector("#golf").textContent = result;
    }
    const clearGame = () => {
        document.querySelector("#golf").textContent = " ";
}
   
