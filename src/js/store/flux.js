const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
      character: null,
      favorite: null,
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			loadPeople: () => {
				fetch("https://swapi.tech/api/people/")
					.then((response) => response.json())
					.then((response) => {
						console.log(response);
						setStore({ people: response.results });
					})
					.catch((error) => {
						console.error("Error fetching people:", error);
					});
			}
		}
	};
};

export default getState;