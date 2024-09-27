document.getElementById('searchButton').addEventListener('click', function () {
    const creature = document.getElementById('creatureInput').value.toLowerCase();

    const url = `https://api.tibiadata.com/v4/creature/${creature}`;

    fetch(url, {
        method: "GET",
        headers: {
            "accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.creature && data.information.status.http_code === 200) {
            const creatureData = data.creature;

            
            document.getElementById('creatureName').textContent = creatureData.name;
            document.getElementById('creatureDescription').textContent = creatureData.description;
            document.getElementById('creatureHealth').textContent = creatureData.hitpoints;
            document.getElementById('creatureExperience').textContent = creatureData.experience_points;
            document.getElementById('creatureAttackType').textContent = creatureData.behaviour;
            document.getElementById('creatureImmunities').textContent = creatureData.immune.join(', ') || "None";
            document.getElementById('creatureStrengths').textContent = creatureData.strong.join(', ') || "None";
            document.getElementById('creatureWeaknesses').textContent = creatureData.weakness.join(', ') || "None";
            document.getElementById('creatureLoot').textContent = creatureData.loot_list.join(', ') || "None";

            
            document.getElementById('creatureImage').src = creatureData.image_url;

            
            document.getElementById('creatureInfo').style.display = "block";
            document.getElementById('errorMessage').style.display = "none";
        } else {
            
            document.getElementById('creatureInfo').style.display = "none";
            document.getElementById('errorMessage').style.display = "block";
        }
    })
    .catch(error => {
        console.error("Erro ao consumir a API:", error);
        document.getElementById('creatureInfo').style.display = "none";
        document.getElementById('errorMessage').style.display = "block";
    })
    .finally(function () {
        console.log('Requisição concluída.');
    });
});
