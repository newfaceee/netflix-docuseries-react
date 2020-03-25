const controls = {
  preparingData: function(series, sortingType, filterType) {
    let db = [...series];
    switch (sortingType) {
      case "Users rating":
        db.sort((a, b) => {
          return b.user_rating - a.user_rating;
        });
        break;
      case "IMDB rating":
        db.sort((a, b) => {
          return b.IMDB_rating - a.IMDB_rating;
        });
        break;
      case "Release date":
        db.sort((a, b) => {
          return b.release_date - a.release_date;
        });
        break;
    }
    switch (filterType) {
      case "All":
        return db;
      case "Trending":
        db = db.filter(item => {
          return item.is_Trending;
        });
        break;
      case "Recently add":
        db = db.filter(item => {
          return item.new;
        });
        break;
    }
    return db;
  }
};
export default controls;
