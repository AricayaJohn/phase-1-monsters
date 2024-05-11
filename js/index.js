// - When the page loads, show the first 50 monsters. Each monster's name, age, and
//   description should be shown.
// we know that we need to fetch get the data
//where do we want to fetch
    //http://localhost:3000/monsters
//what do we do with it 
    //show each monster age name and description
    //forEAch
    //show data 
    document.addEventListener("DOMContentLoaded", () => {
        fetchMonsters();
        createForm();
      
        document.querySelector("#monster-form").addEventListener("submit", (event) => {
            event.preventDefault();
          
            let name = document.querySelector('#monster-name').value;
            let age = document.querySelector('#monster-age').value;
            let description = document.querySelector('#monster-description').value;
          
            let monsterObj = {
              name,
              age,
              description
            };
          
            postNewMonster(monsterObj);
          });
      });
      
      const createForm = () => {
        let formContainer = document.querySelector("#create-monster");
        let form = document.createElement('form');
        form.id = 'monster-form';
      
        let nameInput = document.createElement('input');
        let nameLabel = document.createElement('label');
      
        let ageInput = document.createElement('input');
        let ageLabel = document.createElement('label');
      
        let descriptionInput = document.createElement('input');
        let descriptionLabel = document.createElement('label');
      
        let h2 = document.createElement("h2");
        h2.innerHTML = "Create Monster";
      
        let button = document.createElement('button');
        button.innerText = "Make Monster!!";
      
        nameInput.id = "monster-name";
        ageInput.id = "monster-age";
        descriptionInput.id = "monster-description";
      
        nameLabel.innerText = "Name:";
        ageLabel.innerText = "Age:";
        descriptionLabel.innerText = "Description:";
      
        form.append(
          nameLabel, nameInput,
          ageLabel, ageInput,
          descriptionLabel, descriptionInput
        );
      
        formContainer.append(h2, form, button);
      };
      
      const postNewMonster = (monsterObj) => {
        fetch('http://localhost:3000/monsters', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(monsterObj)
        })
          .then(resp => resp.json())
          .then(monster => {
            console.log(monster);
            // Add code here to update the UI with the newly created monster
          })ç
          .catch(error => console.log(error));
      };
      const fetchMonsters = () => {
        let monsterContainer = document.querySelector('#monster-container');
      
        fetch('http://localhost:3000/monsters')
          .then(resp => resp.json())
          .then(monstersData => {
            monstersData.forEach((monster) => {
              let card = document.createElement('div');
              let name = document.createElement("h2");
              let age = document.createElement("h4");
              let description = document.createElement("p");
      
              name.innerText = monster.name;
              age.innerText = `Age: ${monster.age}`;
              description.innerText = `Bio: ${monster.description}`;
      
              card.append(name, age, description);
              monsterContainer.append(card);
            });
          });
      };


// - Above your list of monsters, you should have a form to create a new monster.
//   You should have fields for name, age, and description, and a 'Create Monster
//   Button'. When you click the button, the monster should be added to the list
//   and saved in the API.
// - At the end of the list of monsters, show a button. When clicked, the button
//   should load the next 50 monsters and show them.