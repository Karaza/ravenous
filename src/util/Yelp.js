const apiKey =
  "CMKVlSIKLE6BBVLbxHmY4b3_9I5YdeZ80WG-nQ9I3Ui-B0SWW7l9nBeKpknEyAM4TayiEhjti_j_aq7-32dkcWoh15BsLs9kklfLWyFT1AiK0bWEHJByHYogDWCgXnYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp;
