import {View, Text, ScrollView, Image, TouchableOpacity, TextInput, SafeAreaView, FlatList, Button} from "react-native";
import {useState} from "react";
import logoImage from '../assets/logo.png'
import locationImage from "../assets/location.png";
import addIcon from "../assets/add.png";
import { globalStyles, interests } from "../global";
import {useNavigation} from "@react-navigation/native";
import useAuth from "../hooks/useAuth";

const Hello = ({setAcceptance}) => {
  return (
    <View style={globalStyles.infoWrapper}>
      <Text style={globalStyles.headingText}>
        Witamy w ONLYOU
      </Text>

      <ScrollView>
        <View>
          <Text style={globalStyles.subHeading}>Pokaż Siebie!</Text>
          <Text>Nie udawaj kogoś kim nie jesteś. Bądź sobą. Wstaw swoje zdjęcia.</Text>
        </View>

        <View>
          <Text style={globalStyles.subHeading}>Bądź ostrożny!</Text>
          <Text>Nikomu nie udostępniaj prywatnych danych osobowych, aby nie narażać się na oszustwa i wymuszenia.</Text>
        </View>

        <View>
          <Text style={globalStyles.subHeading}>Szanuj wpisy innych!</Text>
          <Text>Każdy ma prawo wyrazić chęć spędzania czasu jak lubi.</Text>
        </View>

        <View>
          <Text style={globalStyles.subHeading}>Bądź Fair!</Text>
          <Text>Zgłaszaj nam jeśli widzisz nieodpowiednie zachowanie. Jesteśmy po to by każdy użytkownik czuł się bezpiecznie.</Text>
        </View>

        <View>
          <Text style={globalStyles.subHeading}>Poleć Nas!</Text>
          <Text>Jeśli spodoba Ci się nasza aplikacja opowiedz o niej innym! :)</Text>
        </View>

      </ScrollView>

      <View style={globalStyles.buttonWrapper}>
        <TouchableOpacity style={globalStyles.button} onPress={setAcceptance}>
          <Text style={globalStyles.buttonText}>Zgadzam się</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Style = ({setAccept}) => {
  return (
    <View style={globalStyles.infoWrapper}>
      <Text style={globalStyles.headingText}>Styl spotkania zależy od ubioru</Text>

      <ScrollView>
        <View>
          <Text style={globalStyles.subHeading}>Imprezowicz</Text>
          <Text>Doskonała okazja aby zaszaleć! Zostań gwiazdą wieczoru</Text>
        </View>

        <View>
          <Text style={globalStyles.subHeading}>Luzak</Text>
          <Text>Tutaj możesz ubrać się tak jak lubisz. Poczuj się swobodnie. Wszystkie chwyty dozwolone.</Text>
        </View>

        <View>
          <Text style={globalStyles.subHeading}>Romantyk</Text>
          <Text>Lubisz wprawiać w wrażenie? Podsyć trochę atmosferę, ale zachowaj nutkę słodyczy.</Text>
        </View>

        <View>
          <Text style={globalStyles.subHeading}>Sportowiec</Text>
          <Text>Sport to idealny moment do założenia luźnych lub obcisłych rzeczy. Strój nie może ograniczać Twojego zakresu ruchu.</Text>
        </View>

        <View>
          <Text style={globalStyles.subHeading}>Podróżnik</Text>
          <Text>Wspólny wyjazd? Najlepszym rozwiąazniem będzie ubrać się na cebulkę. Musisz być przygotowana/y na każdą ewentualność.</Text>
        </View>

        <View>
          <Text style={globalStyles.subHeading}>Elegant</Text>
          <Text>Sukienka i marynarka to idealny motyw przewodni Waszego spotkania</Text>
        </View>
      </ScrollView>

      <View style={globalStyles.buttonWrapper}>
        <TouchableOpacity style={globalStyles.button} onPress={setAccept}>
          <Text style={globalStyles.buttonText}>Dalej</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Gender = ({setGender}) => {
  const [gender, setThisGender] = useState("");

  return (
    <View style={globalStyles.genderWrapper}>
      <View style={globalStyles.genderView}>
        <Text style={globalStyles.headingText}>Jestem</Text>
        <TouchableOpacity style={[globalStyles.button, gender === "m" ? globalStyles.selectedButton : '' ]} onPress={()=> setThisGender("m")}><Text style={globalStyles.genderButton}>Kobietą</Text></TouchableOpacity>
        <TouchableOpacity style={[globalStyles.button, gender === "w" ? globalStyles.selectedButton : '' ]} onPress={()=> setThisGender("w")}><Text style={globalStyles.genderButton}>Mężczyzną</Text></TouchableOpacity>
      </View>

      <View style={globalStyles.footerInfo}>
        <Text style={globalStyles.headingText}>Pamiętaj</Text>
        <Text style={globalStyles.secondaryText}>Jeśli jesteś kobietą, w opcji "spotkanie we dwoje" będziesz widzieć tylko mężczyzn.</Text>
        <Text style={globalStyles.secondaryText}>Jeśli jesteś mężczyzną, w opcji "spotkanie we dwoje" będziesz widzieć tylko kobiety.</Text>

        <View style={globalStyles.buttonWrapper}>
          <TouchableOpacity style={!gender ? globalStyles.disabledButton : globalStyles.button} onPress={() => setGender(gender)} disabled={gender === ""}>
            <Text style={globalStyles.buttonText}>Dalej</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const Localization = ({setLocation}) => {
  return (
    <View style={globalStyles.locationView}>

      <View style={globalStyles.locationView}>
        <View style={globalStyles.locationImageWrapper}>
          <Image source={locationImage} style={{width: 80, height: 115,}} />
        </View>

        <Text style={globalStyles.headingText}>
          Udostępnij lokalizację
        </Text>
      </View>


      <View style={globalStyles.footerInfo}>
        <Text style={globalStyles.headingText}>Pamiętaj</Text>
        <Text style={globalStyles.secondaryText}>
          Aby korzystać z aplikacji, muszi zaakceptować jej udostępnianie. Bez tego aplikacja nie będzie poprawnie działać.
        </Text>
        <Text style={globalStyles.secondaryText}>Więcej informacji jak wykorzystujemy Twoją lokalizację znajdziesz tutaj.</Text>
        <View style={globalStyles.buttonWrapper}>
          <TouchableOpacity onPress={setLocation} style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Udostępnij Lokalizację</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const Birthday = ({setBirthday}) => {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  return (
    <View>
      <Text style={globalStyles.headingText}>Kiedy masz urodziny?</Text>
      <View style={globalStyles.inputsWrapper}>
        <TextInput keyboardType="numeric" maxLength={2} style={[globalStyles.customInput, globalStyles.inputSmall]} placeholder="01" value={day} onChangeText={(text) => setDay(text)}/>
        <TextInput keyboardType="numeric" maxLength={2} style={[globalStyles.customInput, globalStyles.inputSmall]} placeholder="01" value={month} onChangeText={(text) => setMonth(text)}/>
        <TextInput keyboardType="numeric" maxLength={4} style={[globalStyles.customInput, globalStyles.inputMedium]} placeholder="2000" value={year} onChangeText={(text) => setYear(text)}/>
      </View>

      <View style={globalStyles.buttonWrapper}>
        <TouchableOpacity style={day && month && year ? globalStyles.button : globalStyles.disabledButton}
                          onPress={() => setBirthday(day+month+year)}
                    disabled={!day || !month || !year}>
          <Text style={globalStyles.buttonText}>Dalej</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const PhoneNumber = ({setPhoneNumber}) => {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [d, setD] = useState(null);
  return (
    <View>
      <Text style={globalStyles.headingText}>Twój numer telefonu</Text>
      <View style={globalStyles.inputsWrapper}>
        <TextInput keyboardType="numeric" maxLength={3} style={[globalStyles.customInput, globalStyles.inputSmall]} placeholder="48"
          value={a} onChangeText={(text) => setA(text)}
        />
        <TextInput keyboardType="numeric" maxLength={3} style={[globalStyles.customInput, globalStyles.inputMedium]} placeholder="100"
          value={b} onChangeText={(text) => setB(text)}
        />
        <TextInput keyboardType="numeric" maxLength={3} style={[globalStyles.customInput, globalStyles.inputMedium]} placeholder="200"
          value={c} onChangeText={(text) => setC(text)}
        />
        <TextInput keyboardType="numeric" maxLength={3} style={[globalStyles.customInput, globalStyles.inputMedium]} placeholder="300"
          value={d} onChangeText={(text) => setD(text)}
        />
      </View>

      <View style={globalStyles.buttonWrapper}>
        <TouchableOpacity disabled={ !b || !c || !d}
                          style={a && b && c && d ? globalStyles.button : globalStyles.disabledButton}
                          onPress={() => setPhoneNumber(a+b+c+d)}>
          <Text style={globalStyles.buttonText}>Dalej</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const Gallery = ({setGallery}) => {
  return (
    <View>
      <Text style={globalStyles.headingText}>Dodaj swoje zdjęcia</Text>

      <View style={globalStyles.galleryItems}>
        <View style={globalStyles.galleryView}>
          <View style={[globalStyles.galleryItem, globalStyles.galleryItemActive]}>
            <Image source={addIcon} style={{ width: 70, height: 70}}/>
          </View>
          <View style={globalStyles.galleryItem}></View>
          <View style={globalStyles.galleryItem}></View>
        </View>
        <View style={globalStyles.galleryView}>
          <View style={globalStyles.galleryItem}></View>
          <View style={globalStyles.galleryItem}></View>
          <View style={globalStyles.galleryItem}></View>
        </View>
      </View>

      <View style={globalStyles.buttonWrapper}>
        <TouchableOpacity style={globalStyles.button} onPress={() => setGallery('images')}>
          <Text style={globalStyles.buttonText}>Dalej</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Item = ({title}) => (
  <View style={{backgroundColor: 'green', marginBottom: 10}}>
    <Button title={title} />
  </View>
);

const Interests = ({profile}) => {
  const navigation = useNavigation();

  const { setProfile } = useAuth();
  const handleSave = () => {

    setProfile(profile);

    navigation.navigate("Home")
  }

  return (
    <View style={globalStyles.interestsWrapper}>
        <FlatList
          data={interests}
          renderItem={({item}) => <Item title={item.name} />}
          keyExtractor={item => item.id}
        />

      <View style={globalStyles.buttonWrapper}>
        <TouchableOpacity style={globalStyles.button} onPress={handleSave}>
          <Text style={globalStyles.buttonText}>Zapisz</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ProfileScreen = () => {
  const [user, setUser] = useState({
    accept: null,
    style: null,
    gender: null,
    localization: null,
    birthday: null,
    phoneNumber: null,
    gallery: null,
    interests: null,
  });

  const step = () => {
    if(!user.accept) {  return 0; }
    if(!user.style) {  return 1; }
    if(!user.gender) {  return 2; }
    if(!user.localization) { return 3; }
    if(!user.birthday) { return 4; }
    if(!user.phoneNumber) { return 5; }
    if(!user.gallery) { return 6; }
    if(!user.interests) { return 7; }
  }

  return (
    <View style={globalStyles.profileWrapper}>

      <View style={globalStyles.logoWrapper}>
        <Image
          source={logoImage}
          style={globalStyles.logo}
        />
      </View>

      {step() === 0 && <Hello setAcceptance={()=> setUser(prevState => {
        return {...prevState, accept: true}
      })}/>}
      {step() === 1 && <Style setAccept={()=> setUser(prevState => {
        return {...prevState, style: true}
      })}/>}
      {step() === 2 && <Gender setGender={(gender)=> setUser(prevState => {
        return {...prevState, gender: gender}
      })}/>}
      {step() === 3 && <Localization setLocation={()=> setUser(prevState => {
        return {...prevState, localization: true}
      })}/>}
      {step() === 4 && <Birthday setBirthday={(birthday)=> setUser(prevState => {
        return {...prevState, birthday: birthday}
      })}/>}
      {step() === 5 && <PhoneNumber setPhoneNumber={(phoneNumber)=> setUser(prevState => {
        return {...prevState, phoneNumber: phoneNumber}
      })}/>}
      {step() === 6 && <Gallery setGallery={()=> setUser(prevState => {
        return {...prevState, gallery: true}
      })}/>}
      {step() === 7 && <Interests profile={user}/>}
    </View>
  )
}

export default ProfileScreen