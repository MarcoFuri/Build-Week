function coloraStelle(id) {
    for (i = 1; i < 11; i++) {
      if (i <= id) {
        document.getElementById(i).style.color = "#00ffffed";
      } else {
        document.getElementById(i).style.color = "#03082f";
      }
    }
  }