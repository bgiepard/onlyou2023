import {View, Text, ScrollView, Image, TouchableOpacity, TextInput, FlatList, SafeAreaView,} from "react-native";
import { useState, useRef } from "react";
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
        <View style={globalStyles.helloTextWrapper}>
          <Text style={globalStyles.subHeading}><Text style={globalStyles.unicodeSquare}>{'\u2B1B'}</Text>   Pokaż Siebie!</Text>
          <Text>   Nie udawaj kogoś kim nie jesteś. Bądź sobą. Wstaw swoje zdjęcia.</Text>
        </View>

        <View style={globalStyles.helloTextWrapper}>
          <Text style={globalStyles.subHeading}><Text style={globalStyles.unicodeSquare}>{'\u2B1B'}</Text>   Bądź ostrożny!</Text>
          <Text>   Nikomu nie udostępniaj prywatnych danych osobowych, aby nie narażać się na oszustwa i wymuszenia.</Text>
        </View>

        <View style={globalStyles.helloTextWrapper}>
          <Text style={globalStyles.subHeading}><Text style={globalStyles.unicodeSquare}>{'\u2B1B'}</Text>   Szanuj wpisy innych!</Text>
          <Text>   Każdy ma prawo wyrazić chęć spędzania czasu jak lubi.</Text>
        </View>

        <View style={globalStyles.helloTextWrapper}>
          <Text style={globalStyles.subHeading}><Text style={globalStyles.unicodeSquare}>{'\u2B1B'}</Text>   Bądź Fair!</Text>
          <Text>   Zgłaszaj nam jeśli widzisz nieodpowiednie zachowanie. Jesteśmy po to by każdy użytkownik czuł się bezpiecznie.</Text>
        </View>

        <View style={globalStyles.helloTextWrapper}>
          <Text style={globalStyles.subHeading}><Text style={globalStyles.unicodeSquare}>{'\u2B1B'}</Text>   Poleć Nas!</Text>
          <Text>   Jeśli spodoba Ci się nasza aplikacja opowiedz o niej innym! :)</Text>
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
  const koniczyna = require('../assets/koniczyna.png');
  const mucha = require('../assets/mucha.png');
  const nutka = require('../assets/nutka.png');
  const pilka = require('../assets/piłka.png');
  const tulipan = require('../assets/tulipan.png');
  const walizka = require('../assets/walizka.png');

  return (
    <View style={globalStyles.infoWrapper}>
      <Text style={globalStyles.headingText}>Styl spotkania zależy od ubioru.</Text>

      <ScrollView>
        <View>
          <View style={globalStyles.profileStyle}>
            <Image source={nutka} style={{width: 30, height: 30}} />
            <Text style={globalStyles.subHeading}>Imprezowicz</Text>
          </View>
          <Text>Doskonała okazja aby zaszaleć! Zostań gwiazdą wieczoru</Text>
        </View>

        <View>
          <View style={globalStyles.profileStyle}>
            <Image source={koniczyna} style={{width: 30, height: 30}} />
            <Text style={globalStyles.subHeading}>Luzak</Text>
          </View>
          <Text>Tutaj możesz ubrać się tak jak lubisz. Poczuj się swobodnie. Wszystkie chwyty dozwolone.</Text>
        </View>

        <View>
          <View style={globalStyles.profileStyle}>
            <Image source={tulipan} style={{width: 30, height: 30}} />
            <Text style={globalStyles.subHeading}>Romantyk</Text>
          </View>
          <Text>Lubisz wprawiać w wrażenie? Podsyć trochę atmosferę, ale zachowaj nutkę słodyczy.</Text>
        </View>

        <View>
          <View style={globalStyles.profileStyle}>
            <Image source={pilka} style={{width: 30, height: 30}} />
            <Text style={globalStyles.subHeading}>Sportowiec</Text>
          </View>
          <Text>Sport to idealny moment do założenia luźnych lub obcisłych rzeczy. Strój nie może ograniczać Twojego zakresu ruchu.</Text>
        </View>

        <View>
          <View style={globalStyles.profileStyle}>
            <Image source={walizka} style={{width: 30, height: 30}} />
            <Text style={globalStyles.subHeading}>Podróżnik</Text>
          </View>
          <Text>Wspólny wyjazd? Najlepszym rozwiąazniem będzie ubrać się na cebulkę. Musisz być przygotowana/y na każdą ewentualność.</Text>
        </View>

        <View>
          <View style={globalStyles.profileStyle}>
            <Image source={mucha} style={{width: 30, height: 30}} />
            <Text style={globalStyles.subHeading}>Elegant</Text>
          </View>
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
          <Image source={locationImage} style={{width: 100, height: 142,}} />
        </View>

        <Text style={globalStyles.headingText}>
          Udostępnij lokalizację
        </Text>
      </View>


      <View style={globalStyles.footerInfo}>
        <Text style={[globalStyles.headingText, globalStyles.locationHeading]}>Pamiętaj</Text>
        <Text style={[globalStyles.secondaryText, globalStyles.locationSecondaryText]}>
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
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);

  return (
    <View style={globalStyles.birthdayWrapper}>
      <View style={globalStyles.birthdayContainer}>
        <Text style={globalStyles.headingText}>Kiedy masz urodziny?</Text>
        <View style={globalStyles.inputsWrapper}>
          <TextInput
            keyboardType="numeric"
            maxLength={2}
            placeholderTextColor="#bea657"
            style={[globalStyles.customInput, globalStyles.inputPhoneSmall]}
            placeholder="01"
            value={day}
            onChangeText={(text) => {
              setDay(text);
              if(text.length === 2) monthInputRef.current.focus();
            }}
          />
          <TextInput
            ref={monthInputRef}
            keyboardType="numeric"
            maxLength={2}
            placeholderTextColor="#bea657"
            style={[globalStyles.customInput, globalStyles.inputPhoneSmall]}
            placeholder="01"
            value={month}
            onChangeText={(text) => {
              setMonth(text);
              if(text.length === 2) yearInputRef.current.focus();
            }}
          />
          <TextInput
            ref={yearInputRef}
            keyboardType="numeric"
            maxLength={4}
            placeholderTextColor="#bea657"
            style={[globalStyles.customInput, globalStyles.inputSmall]}
            placeholder="2000"
            value={year}
            onChangeText={(text) => setYear(text)}
          />
        </View>

        <View style={globalStyles.buttonWrapper}>
          <TouchableOpacity style={day && month && year ? [globalStyles.button, globalStyles.buttonSquare] : [globalStyles.disabledButton, globalStyles.disabledButtonSquare]}
                            onPress={() => setBirthday(day+month+year)}
                            disabled={!day || !month || !year}>
            <Text style={globalStyles.buttonText}>Dalej</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const PhoneNumber = ({setPhoneNumber}) => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");

  const bInputRef = useRef(null);
  const cInputRef = useRef(null);
  const dInputRef = useRef(null);

  return (
    <View style={globalStyles.phoneWrapper}>
      <View style={globalStyles.phoneContainer}>
        <Text style={globalStyles.headingText}>Twój numer telefonu</Text>
        <View style={[globalStyles.inputsWrapper, globalStyles.inputsPhoneWrapper]}>
          <TextInput
            keyboardType="numeric"
            maxLength={3}
            placeholderTextColor="#bea657"
            style={[globalStyles.customInput, globalStyles.inputPhoneSmall]}
            placeholder="48"
            value={a}
            onChangeText={(text) => {
              setA(text);
              if(text.length === 3) bInputRef.current.focus();
            }}
          />
          <TextInput
            ref={bInputRef}
            keyboardType="numeric"
            maxLength={3}
            placeholderTextColor="#bea657"
            style={[globalStyles.customInput, globalStyles.inputPhoneSmall2]}
            placeholder="100"
            value={b}
            onChangeText={(text) => {
              setB(text);
              if(text.length === 3) cInputRef.current.focus();
            }}
          />
          <TextInput
            ref={cInputRef}
            keyboardType="numeric"
            maxLength={3}
            placeholderTextColor="#bea657"
            style={[globalStyles.customInput, globalStyles.inputPhoneSmall2]}
            placeholder="200"
            value={c}
            onChangeText={(text) => {
              setC(text);
              if(text.length === 3) dInputRef.current.focus();
            }}
          />
          <TextInput
            ref={dInputRef}
            keyboardType="numeric"
            maxLength={3}
            placeholderTextColor="#bea657"
            style={[globalStyles.customInput, globalStyles.inputPhoneSmall2]}
            placeholder="300"
            value={d}
            onChangeText={(text) => setD(text)}
          />
        </View>

        <View style={globalStyles.buttonWrapper}>
          <TouchableOpacity
            disabled={!a || !b || !c || !d}
            style={a && b && c && d ? [globalStyles.button, globalStyles.buttonSquare] : [globalStyles.disabledButton, globalStyles.disabledButtonSquare]}
            onPress={() => setPhoneNumber(a+b+c+d)}>
            <Text style={globalStyles.buttonText}>Dalej</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const Gallery = ({setGallery}) => {
  return (
    <SafeAreaView style={globalStyles.galleryWrapper}>
      <View style={globalStyles.galleryContainer}>
        <Text style={[globalStyles.headingText, globalStyles.galleryHeading]}>Dodaj swoje zdjęcia</Text>

        <View style={globalStyles.galleryItems}>
          <View style={globalStyles.galleryView}>
            <View style={[globalStyles.galleryItem, globalStyles.galleryItemActive]}>
              <Image source={addIcon} style={{ width: 70, height: 70}}/>
            </View>
            <View style={globalStyles.galleryItem}><Text>2</Text></View>
            <View style={globalStyles.galleryItem}><Text>3</Text></View>
          </View>
          <View style={globalStyles.galleryView2}>
            <View style={globalStyles.galleryItem}><Text>4</Text></View>
            <View style={globalStyles.galleryItem}><Text>5</Text></View>
            <View style={globalStyles.galleryItem}><Text>6</Text></View>
          </View>
        </View>

        <View style={globalStyles.buttonWrapper}>
          <TouchableOpacity style={globalStyles.button} onPress={() => setGallery('images')}>
            <Text style={globalStyles.buttonText}>Dalej</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const Item = ({ title, onPress, selected }) => (
  <TouchableOpacity
    style={[
      globalStyles.interestsItem,
      selected ? globalStyles.interestsItemSelected : null,
    ]}
    onPress={onPress}
  >
    <Text style={globalStyles.interestsItemText}>{title}</Text>
  </TouchableOpacity>
);

const Interests = ({ profile }) => {
  const navigation = useNavigation();

  const { setProfile } = useAuth();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSave = () => {
    // setProfile({...profile, interests: selectedItems, name: 'Bartek'});
  };

  const handleItemPress = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      if (selectedItems.length < 10) {
        setSelectedItems([...selectedItems, itemId]);
      }
    }
  };

  return (
    <View style={globalStyles.interestsWrapper}>
      <Text style={[globalStyles.headingText, globalStyles.interestsHeading]}>Lubię</Text>
      <FlatList
        data={interests}
        renderItem={({ item }) => (
          <Item
            title={item.name}
            onPress={() => handleItemPress(item.id)}
            selected={selectedItems.includes(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <View style={globalStyles.buttonWrapper}>
        <TouchableOpacity style={selectedItems.length > 0 ? globalStyles.button : globalStyles.disabledButton}
                          disabled={selectedItems.length < 1} onPress={() => navigation.navigate('Home')}>
          <Text style={globalStyles.buttonText}>Zapisz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileScreen = () => {
  const [user, setUser] = useState({
    name: null,
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
      {step() === 7 && <Interests profile={user} />}
    </View>
  )
}

export default ProfileScreen