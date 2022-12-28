
const renderFoods = (data) => {
    const foodsFoods = document.getElementById('foodsFoods');

    data.forEach((element) => {
        const { id, name, description, urlImage, urlRecipe } = element;

        foodsFoods.innerHTML += `
        <div class="col-md-4" key=${id}>
        <div class="card bg-body border border-2 border-light border-opacity-25 h-100 mx-auto" style="width: 18rem;">
          <img src="${urlImage}" 
          class="card-img-top" alt="Costa 1" width="256" height="144" style="width: 100%; height: 192px; object-fit: cover; border-radius: 0.5rem;">
          <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">Plato Típico</div>
            <div class="card-body h-100">
               <h5 class="card-title">${name}</h5>
               <p class="card-text">${description}</p>
               <a href="${urlRecipe}" class="btn btn-primary" target="_blank">Receta</a>
            </div>
          </div>
       </div>
     </div>
    `;
    });
};

const header = () => {
    const searchForm = document.getElementById('searchForm');

    const searchCharacters = (e) => {
        e.preventDefault();
        const name = searchForm.name.value;
        console.log(name);
        fetchReadCharacters(name);
    };

    const fetchReadCharacters = async (name) => {
        try {
            const { data } = await axios.get(`https://elliotgaramendi.github.io/frontend-tecsup-e-g11/semana-8/3-chanchirata/api/data.json?name=${name}`);
            // const { data } = await axios.get('https://elliotgaramendi.github.io/frontend-tecsup-e-g11/semana-8/3-chanchirata/api/data.json?name=${name}');
            console.log(data.results);
            renderCharacters(data.results);
    
        } catch (error) {
            console.log(error);
        } finally {
            window.scrollTo(0, 0);
        }
    };

    // const fetchReadCharacters = async (name) => {
    // try {
    //     const { data } = await axios.get(`https://elliotgaramendi.github.io/frontend-tecsup-e-g11/semana-8/3-chanchirata/api/data.json?name=${name}`);
    //     console.log(data);
    //     renderFoods(data.results);

    // } catch (error) {
    //     console.log(error);
    // } finally {
    //     window.scrollTo(0, 0);
    // }
    // };

    searchForm.addEventListener('submit',searchCharacters)
};

export default header;