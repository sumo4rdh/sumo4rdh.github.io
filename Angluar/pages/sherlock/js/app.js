var app = angular.module('BoltNetworkApp', []);
app.controller('myCtrl', function($scope) {
    $scope.programs = [
        {
  series_img: "img/sherlock.jpg",
  episode_nr: 0,
  season: 1,
  episode: "Unaired Pilot",
  description: "Invalided home from the war in Afghanistan, Dr. John Watson becomes roommates with the world's only 'consulting detective,' Sherlock Holmes. Within a day their friendship is forged and several murders are solved.",
  datetime: new Date(2010, 6, 30, 21, 00, 00, 00)
},
        {
  series_img: "img/s1e1.jpg",
  episode_nr: 1,
  season: 1,
  episode: "A Study in Pink",
  description: "War vet Dr. John Watson returns to London in need of a place to stay. He meets Sherlock Holmes, a consulting detective, and the two soon find themselves digging into a string of serial 'suicides.'",
  datetime: new Date(2010, 7, 25, 21, 00, 00, 00)
},
        {
  series_img: "img/s1e2.jpg",
  episode_nr: 2,
  season: 1,
  episode: "The Blind Banker",
  description: "Mysterious symbols and murders are showing up all over London, leading Sherlock and John to a secret Chinese crime syndicate called Black Lotus.",
  datetime: new Date(2010, 8, 01, 21, 00, 00, 00)
},
        {
  series_img: "img/s1e3.jpg",
  episode_nr: 3,
  season: 1,
  episode: "The Great Game",
  description: "Mycroft needs Sherlock's help, but a remorseless criminal mastermind puts Sherlock on a distracting crime-solving spree via a series of hostage human bombs through which he speaks.",
  datetime: new Date(2010, 8, 08, 21, 00, 00, 00)
},
        {
  series_img: "img/s2e1.jpg",
  episode_nr: 1,
  season: 2,
  episode: "A Scandal in Belgravia",
  description: "Sherlock must confiscate something of importance from a mysterious woman named Irene Adler.",
  datetime: new Date(2012, 1, 1, 21, 00, 00, 00)
},
        {
  series_img: "img/s2e2.jpg",
  episode_nr: 2,
  season: 2,
  episode: "The Hounds of Baskerville",
  description: "Sherlock and John investigate the ghosts of a young man who has been seeing monstrous hounds out in the woods where his father died.",
  datetime: new Date(2012, 1, 8, 21, 00, 00, 00)
},
        {
  series_img: "img/s2e3.jpg",
  episode_nr: 3,
  season: 2,
  episode: "The Reichenbach Fall",
  description: "Jim Moriarty hatches a mad scheme to turn the whole city against Sherlock.",
  datetime: new Date(2012, 1, 15, 21, 00, 00, 00)
},
        {
  series_img: "img/s3e1.jpg",
  episode_nr: 1,
  season: 3,
  episode: "The Empty Hearse",
  description: "Mycroft calls Sherlock back to London to investigate an underground terrorist organization.",
  datetime: new Date(2014, 1, 1, 21, 00, 00, 00)
},
        {
  series_img: "img/s3e2.jpg",
  episode_nr: 2,
  season: 3,
  episode: "The Sign of Three",
  description: "Sherlock tries to give the perfect best man speech at John's wedding when he suddenly realizes a murder is about to take place.",
  datetime: new Date(2014, 1, 5, 21, 00, 00, 00)
},
        {

  series_img: "img/s3e3.jpg",
  episode_nr: 3,
  season: 3,
  episode: "His Last Vow",
  description: "Sherlock goes up against the notorious blackmailer Charles Augustus Magnussen.",
  datetime: new Date(2014, 1, 12, 21, 00, 00, 00)
}
    ];
});