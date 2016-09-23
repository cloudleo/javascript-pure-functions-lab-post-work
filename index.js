const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

var getNextEpisodeInPlaylist = episodes =>{
	return episodes[0];
}

var addToPlaylist = (episodes, finaleEpisode) => {
  return episodes.concat(finaleEpisode);
}

var removeFromPlaylist = (episodes,obj) =>{
  let replacement = episodes.slice(0);
  let val = replacement.indexOf(obj);
  replacement.splice(val,1);
  return replacement;
}

function bingeWatch(playlist){
  
  if(playlist.length === 0){
  	return "Please let there be more!";
  }
   playlist.pop();
   return bingeWatch(playlist);

}













