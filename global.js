
import { StyleSheet } from 'react-native'
export const globalStyles = StyleSheet.create({
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
    fontSize: 28,
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
    width: 150,
    height: 75,
    marginHorizontal: 'auto',
    marginBottom: 30,
    marginTop: 20,
  },
  profileWrapper: {
    marginVertical: 10,
    flex: 1,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#7F7F7F',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  buttonText: {
    color: '#FFC400',
    textTransform: 'uppercase',
    fontFamily: 'Secondary',
    fontSize: 20,
  },
  disabledButton: {
    backgroundColor: '#aeaeae',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  genderView: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 50,
    gap: 25,
    marginHorizontal: 30,
  },
  genderWrapper: {
    flex: 1,
  },
  footerInfo: {
    backgroundColor: '#D0D2D8',
    padding: 25,
    borderRadius: 25,
    marginBottom: 10,
    marginHorizontal: 10,
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
    marginBottom: 10,
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
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  customInput: {
    backgroundColor: '#7F7F7F',
    padding: 10,
    borderRadius: 15,
    fontSize: 20,
    fontFamily: 'Secondary',
    color: '#FFC400',
    textAlign: 'center'
  },
  inputSmall: {
    width: '25%',
    marginHorizontal: 10
  },
  inputMedium: {
    width: '35%',
    marginHorizontal: 10
  },
  galleryView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  galleryItems: {
    paddingVertical: 30
  },
  galleryItem: {
    width: 80,
    height: 80,
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
    padding: 20
  }
});

export const interests = [
  { "id": 1, "name": "Kreatywne pomysły" },
  { "id": 2, "name": "Poranną kawę/herbatę" },
  { "id": 3, "name": "Wyzwania" },
  { "id": 4, "name": "Cieszyć się każdą chwilą" },
  { "id": 5, "name": "Opowiadać dowcipy" },
  { "id": 6, "name": "Nocne wycieczki" },
  { "id": 7, "name": "Spotkania w plenerze" },
  { "id": 8, "name": "Wspólnie spędzać czas" },
  { "id": 9, "name": "Leniuchować w domu" },
  { "id": 10, "name": "Spontaniczne spotkania" },
  { "id": 11, "name": "Dużo rozmawiać" },
  { "id": 12, "name": "Długo spać" },
  { "id": 13, "name": "Późno wstawać" },
  { "id": 14, "name": "Wcześnie wstawać" },
  { "id": 15, "name": "Dawać prezenty" },
  { "id": 16, "name": "Inspirować innych" },
  { "id": 17, "name": "Dostawać prezenty" },
  { "id": 18, "name": "Długą kąpiel" },
  { "id": 19, "name": "Poznawać nowe technologię" },
  { "id": 20, "name": "Dużo pracować" },
  { "id": 21, "name": "Poznawać nowe kuchnie" },
  { "id": 22, "name": "Zbierać pocztówki i magnesy" },
  { "id": 23, "name": "Podróżować po świecie" },
  { "id": 24, "name": "Spędzanie czasu z dziećmi" },
  { "id": 25, "name": "Wspólne spacery" },
  { "id": 26, "name": "Odkrywać dziką przyrodę" },
  { "id": 27, "name": "Spacerować po lesie" },
  { "id": 28, "name": "Poszukiwać skarbów" },
  { "id": 29, "name": "Odkrywać sekrety historii" },
  { "id": 30, "name": "Podejmować wyzwania" },
  { "id": 31, "name": "Nocnego MC" },
  { "id": 32, "name": "Zakupy na mieście" },
  { "id": 33, "name": "Kwiaty" },
  { "id": 34, "name": "Koncerty" },
  { "id": 35, "name": "Kino" },
  { "id": 36, "name": "Teatr" },
  { "id": 37, "name": "Sztukę iluzji" },
  { "id": 38, "name": "Kabarety" },
  { "id": 39, "name": "Zachód słońca" },
  { "id": 40, "name": "Słońce i plażę" },
  { "id": 41, "name": "Streaming" },
  { "id": 42, "name": "Imprezy na mieście" },
  { "id": 43, "name": "Domówki" },
  { "id": 44, "name": "Niespodzianki" },
  { "id": 45, "name": "Grill/ognisko" },
  { "id": 46, "name": "Jedzenie na mieście" },
  { "id": 47, "name": "Kluby/restauracje" },
  { "id": 48, "name": "Flitować" },
  { "id": 49, "name": "Netflix, Disney, HBO, Amazon" },
  { "id": 50, "name": "Instagram" },
]
