class FishEntry {
    name;
    rating;
    imgsrc;
    method;

    constructor(name,rating,imgsrc,method) {
        this.name = name;
        this.rating = rating;
        this.imgsrc = imgsrc;
        this.method = method;
    }

    nameElement() {
        const li = document.createElement('li');
        li.textContent = `Fish Name: ${this.name}`;
        return li;
    }

    rateElement() {
        const li = document.createElement('li');
        li.textContent = `Rating: ${this.rating}`;
        return li;
    }

    methodElement() {
        const li = document.createElement('li');
        li.textContent = `Method: ${this.method}`;
        return li;
    }
}

fetch('resources/datasource/fishlist.json')
    .then(response => response.json())
    .then(data => {

        // Map JSON data to instances of FishEntry
       const fishes = data.map(fishData => {
        const name = fishData.name ?? "Unknown Name";
        const rating = fishData.rating ?? 0;
        const imgsrc = fishData.image ?? "resources/images/rankings/default.jpeg";
        const method = fishData.method ?? "";
        return new FishEntry(name, rating, imgsrc, method);
       })
       // Select the UL element in the HTML
       const fishList = document.getElementById('ratings-list');

       // Appen each fish detail to the UL
       fishes.forEach(fish => {
        const divContainer = document.createElement('div');
        divContainer.setAttribute("class","fish-entry");

        const imagePlaceholder= document.createElement('img');
        image = fish.imgsrc
        imagePlaceholder.setAttribute("src",image);
        imagePlaceholder.textContent = "Image Placeholder";
        divContainer.appendChild(imagePlaceholder);

        const ulContainer = document.createElement('ul')
        divContainer.appendChild(ulContainer);

        const fishName = fish.nameElement();
        const fishRating = fish.rateElement();
        const fishMethod = fish.methodElement();

        ulContainer.appendChild(fishName);
        ulContainer.appendChild(fishRating);
        ulContainer.appendChild(fishMethod);
        fishList.appendChild(divContainer);
       });

    })

    .catch(error => console.error('Error fretching data: ',error));