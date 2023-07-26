
import { StyleSheet } from 'react-native'
export const globalStyles = StyleSheet.create({
  mainView: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  infoWrapper: {
    flex: 1,
    backgroundColor: '#D0D2D8',
    padding: 25,
    borderRadius: 25,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  headingText: {
    fontFamily: 'Primary',
    fontSize: 24,
    textAlign: 'center'
  },
  subHeading: {
    fontFamily: 'Primary',
    fontSize: 22,
    marginBottom: 5,
    marginTop: 10,
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: 30,
  },
  logo: {
    width: 250,
    height: 125,
    marginHorizontal: 'auto',
    marginBottom: 30,
    marginTop: 20,
  },
  profileWrapper: {
    marginVertical: 10,
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#7F7F7F',
    padding: 5,
    paddingHorizontal: 35,
    paddingBottom: 6,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFC400',
    textTransform: 'uppercase',
    fontFamily: 'Secondary',
    fontSize: 18,
  },
  disabledButton: {
    backgroundColor: '#aeaeae',
    padding: 5,
    paddingHorizontal: 35,
    borderRadius: 15,
  },
  genderView: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
    gap: 25,
    marginHorizontal: 30,
  },
  genderWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  footerInfo: {
    backgroundColor: '#D0D2D8',
    padding: 25,
    borderRadius: 25,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  homeFooter: {
    padding: 20,
  },
  selectedButton: {
    backgroundColor: "#565656"
  },
  genderButton: {
    textAlign: 'center',
    color: '#FFC400',
  },
  secondaryText: {
    fontFamily: 'Secondary',
    marginBottom: 5,
    textAlign: 'center'
  },
  locationView: {
    flex: 1,
  },
  locationImageWrapper: {
    paddingTop: 50,
    alignItems: 'center',
    paddingBottom: 20,
  },
  inputsWrapper: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 50,
    justifyContent: 'center',
    gap: 15,
  },
  inputsPhoneWrapper: {
    paddingHorizontal: 10
  },
  customInput: {
    backgroundColor: '#7F7F7F',
    padding: 5,
    borderRadius: 10,
    fontSize: 18,
    fontFamily: 'Secondary',
    color: '#FFC400',
    textAlign: 'center'
  },
  inputSmall: {
    width: '25%',
  },
  inputMedium: {
    width: '35%',
  },
  inputPhoneSmall: {
    width: '15%',
  },
  galleryItems: {
    flex: 1,
    paddingVertical: 15,
  },
  galleryView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  galleryView2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  galleryItem: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#ddd',
    marginLeft: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  galleryItemActive: {
    backgroundColor: '#7F7F7F',
  },
  interestsWrapper: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  interestsItem: {
    borderRadius: 10,
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 5
  },
  interestsItemSelected: {
    backgroundColor: '#7F7F7F',
  },
  interestsItemText: {
    fontFamily: 'Secondary',
    textTransform: 'lowercase',
    textAlign: 'center'
  },
  loginView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  loginWrapper: {
    flex: 1,
    width: '70%'
  },
  loginButton: {
    marginTop: 35,
    backgroundColor: '#7F7F7F',
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    gap: 20,
    justifyContent: 'center',
    paddingRight: 10,
  },
  loginButtonText: {
    textTransform: 'none',
  },
  loginFooterInfo: {
    backgroundColor: '#D0D2D8',
    padding: 10,
    borderRadius: 25,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingTop: 5,
  },
  footerText: {
    textAlign: 'center',
    fontFamily: 'Secondary',
  },
  loginHeadingInfo: {
    marginBottom: 10,
  },
  footerLink: {
    textDecorationLine: 'underline'
  },
  helloTextWrapper: {

  },
  unicodeSquare: {
    fontSize: 9,
  },
  profileStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  homeView: {
    flex: 1,
  },
  homeIconsWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  homeRow: {
    flexDirection: "row",
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  homeIcon: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#aaa',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoText: {
    fontFamily: 'secondary',
    marginTop: 20
  }
});

export const interests = [
  { id: 1, name: "Kreatywne pomysły" },
  { id: 2, name: "Poranną kawę/herbatę" },
  { id: 3, name: "Wyzwania" },
  { id: 4, name: "Cieszyć się każdą chwilą" },
  { id: 5, name: "Opowiadać dowcipy" },
  { id: 6, name: "Nocne wycieczki" },
  { id: 7, name: "Spotkania w plenerze" },
  { id: 8, name: "Wspólnie spędzać czas" },
  { id: 9, name: "Leniuchować w domu" },
  { id: 10, name: "Spontaniczne spotkania" },
  { id: 11, name: "Dużo rozmawiać" },
  { id: 12, name: "Długo spać" },
  { id: 13, name: "Późno wstawać" },
  { id: 14, name: "Wcześnie wstawać" },
  { id: 15, name: "Dawać prezenty" },
  { id: 16, name: "Inspirować innych" },
  { id: 17, name: "Dostawać prezenty" },
  { id: 18, name: "Długą kąpiel" },
  { id: 19, name: "Poznawać nowe technologię" },
  { id: 20, name: "Dużo pracować" },
  { id: 21, name: "Poznawać nowe kuchnie" },
  { id: 22, name: "Zbierać pocztówki i magnesy" },
  { id: 23, name: "Podróżować po świecie" },
  { id: 24, name: "Spędzanie czasu z dziećmi" },
  { id: 25, name: "Wspólne spacery" },
  { id: 26, name: "Odkrywać dziką przyrodę" },
  { id: 27, name: "Spacerować po lesie" },
  { id: 28, name: "Poszukiwać skarbów" },
  { id: 29, name: "Odkrywać sekrety historii" },
  { id: 30, name: "Podejmować wyzwania" },
  { id: 31, name: "Nocnego MC" },
  { id: 32, name: "Zakupy na mieście" },
  { id: 33, name: "Kwiaty" },
  { id: 34, name: "Koncerty" },
  { id: 35, name: "Kino" },
  { id: 36, name: "Teatr" },
  { id: 37, name: "Sztukę iluzji" },
  { id: 38, name: "Kabarety" },
  { id: 39, name: "Zachód słońca" },
  { id: 40, name: "Słońce i plażę" },
  { id: 41, name: "Streaming" },
  { id: 42, name: "Imprezy na mieście" },
  { id: 43, name: "Domówki" },
  { id: 44, name: "Niespodzianki" },
  { id: 45, name: "Grill/ognisko" },
  { id: 46, name: "Jedzenie na mieście" },
  { id: 47, name: "Kluby/restauracje" },
  { id: 48, name: "Flitować" },
  { id: 49, name: "Netflix, Disney, HBO, Amazon" },
  { id: 50, name: "Instagram" },
  { id: 51, name: "Youtube" },
  { id: 52, name: "Grać na konsoli" },
  { id: 53, name: "Oglądać TIKTOKi" },
  { id: 54, name: "Tworzyć muzykę" },
  { id: 55, name: "Miksowanie muzyki" },
  { id: 56, name: "Grać na instrumentach" },
  { id: 57, name: "Śpiewać" },
  { id: 58, name: "Układać stylizacje mody" },
  { id: 59, name: "Makijaż" },
  { id: 60, name: "Tańczyć" },
  { id: 61, name: "Nocne przejażdżki" },
  { id: 62, name: "Masarz" },
  { id: 63, name: "Adrenalinę" },
  { id: 64, name: "Militaria" },
  { id: 65, name: "Zdrowe żywienie" },
  { id: 66, name: "Malować" },
  { id: 67, name: "Rozwiązywanie zadań" },
  { id: 68, name: "Logiczne łamigłówki" },
  { id: 69, name: "Krzyżówki / sudoku" },
  { id: 70, name: "Naukę języków" },
  { id: 71, name: "Czytać książki" },
  { id: 72, name: "Uczyć się" },
  { id: 73, name: "Układać puzzle" },
  { id: 74, name: "Samochody i motocykle" },
  { id: 75, name: "Filmować i fotografować" },
  { id: 76, name: "Programować" },
  { id: 77, name: "Obserwacje ptaków" },
  { id: 78, name: "Wędkarstwo" },
  { id: 79, name: "Astronomię" },
  { id: 80, name: "Majsterkowanie" },
  { id: 81, name: "Aktorstwo" },
  { id: 82, name: "Wolontariat" },
  { id: 83, name: "Szydełkować" },
  { id: 84, name: "Projektować/szyć ubrania" },
  { id: 85, name: "Pielęgnować ogród" },
  { id: 86, name: "Wymyślać przepisy" },
  { id: 87, name: "Piec ciasta" },
  { id: 88, name: "Zero west/minimalizm" },
  { id: 89, name: "Biegać" },
  { id: 90, name: "Pilka Nożną" },
  { id: 91, name: "Koszykówkę" },
  { id: 92, name: "Siatkówkę" },
  { id: 93, name: "Tenisa" },
  { id: 94, name: "Jogę" },
  { id: 95, name: "Sztuki walki/Boks" },
  { id: 96, name: "Paintballa" },
  { id: 97, name: "Jazdę na łyżwach" },
  { id: 98, name: "Jazdę na rolkach" },
  { id: 99, name: "Jazdę na desce" },
  { id: 100, name: "Jazdę na nartach" },
  { id: 101, name: "Jazdę na snowboardzie" },
  { id: 102, name: "Jazdę na sankach" },
  { id: 103, name: "Fitness" },
  { id: 104, name: "Kolarstwo" },
  { id: 105, name: "Żeglować" },
  { id: 106, name: "Pływać, nurkować" },
  { id: 107, name: "Jazdę konno" },
  { id: 108, name: "Oglądać mecze" },
  { id: 109, name: "Pływać w morzu" },
  { id: 110, name: "Sporty grupowe" },
  { id: 111, name: "Morsować" },
  { id: 112, name: "Survival" },
  { id: 113, name: "Skoki na bungee" },
  { id: 114, name: "Skoki na spadochronie" },
  { id: 115, name: "Motocross" },
  { id: 116, name: "Przejażdżki rowerami" },
  { id: 117, name: "Wspinaczkę wysokogórską" },
  { id: 118, name: "Geocatching" },
  { id: 119, name: "Gry miejskie" },
  { id: 120, name: "Wędrować po górach" },
  { id: 121, name: "Grę w szachy" }
]
