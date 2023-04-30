import { Document, View, StyleSheet, Page, Link, Text } from './react-pdf';
import Watermark from './components/Watermark';
import Heading from './components/Heading';
import Section from './components/Section';
import WorkPost from './components/WorkPost';
import ListItem from './components/ListItem';
import Resume from './components/Resume';
import EducationPost from './components/EducationPost';
import Insight from './components/Insight';
import { Language } from './components/Language';
import SocialMedia from './components/SocialMedia';

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingHorizontal: 50,
  },
  row: {
    flexDirection: 'row',
  },
  leftColumn: {
    flexGrow: 1,
    marginRight: 16,
    width: '55%',
  },
  rightColumn: {
    flexGrow: 1,
    width: '40%',
  },
  link: {
    textDecoration: 'underline',
  },
});

export const App: React.FC = () => {
  return (
    <Document
      title='Kálóczi Kevin'
      author='Kálóczi Kevin'
      keywords='software,developer,javascript,react,ionic,laravel,php,web'
    >
      <Page size='A4' style={styles.page}>
        <Watermark />
        <Heading
          title='Kálóczi Kevin'
          subtitle='Webes frontend/backend fejlesztő'
          avatarUrl="/img/avatar.png"
          information={{
            phone: '+36 30 335 5269',
            email: 'kaloczi.kvn@gmail.com',
            website: 'https://kvn.hu/',
            location: 'Győr',
            dateOfBirth: '1996.06.12.',
          }}
        />
        <View style={styles.row}>
          <View style={styles.leftColumn}>
            <Section title='Munkatapasztalat' spacing={8}>
              <WorkPost
                title='Webfejlesztő'
                companyName='Different Fejlesztő Kft.'
                companyUrl='https://different.hu/'
                location='Győr'
                startAt='2017.04.10.'
                description={`Weboldalak, webshopok és egyedi fejlesztések front- és backend \n programozása.`}
              >
                <ListItem>
                  Frontend felületek fejlesztése React keretrendszer használatával
                </ListItem>
                <ListItem>
                  Backend rendszerek fejlesztése Laravel keretrendszer használatával
                </ListItem>
                <ListItem>Egyszerű statikus weblapok és WordPress fejlesztések</ListItem>
                <ListItem>Ionic alapú crossplatform mobil applikációk fejlesztése</ListItem>
              </WorkPost>
              <WorkPost
                title='BF3: Reality Mod'
                companyName='BF3: Reality Mod Dev Team'
                companyUrl='https://bf3reality.com/'
                location='Távoli'
                startAt='2021'
                description={`A mod fő inspirációját a sikeres "BF2: Project Reality" modból meríti. Teljesen új játékmenetet és felhasználói felületet kínál, amely taktikusabb és realisztikusabb élményt nyújt, mint a BF3 alapjáték.`}
              >
                <ListItem>UI felületek fejlesztése VueJs használatával</ListItem>
                <ListItem>UI felületek tervezése</ListItem>
                <ListItem>Mod fejlesztése Lua programozási nyelven</ListItem>
                <ListItem>Trailer videó forgatása és vágása</ListItem>
              </WorkPost>
              <WorkPost
                title='BF3: Battle Royale'
                companyName='BF3: Battle Royale Dev Team'
                companyUrl='https://bf3br.github.io/'
                location='Távoli'
                startAt='2020'
                description={`A "BF3: Battle Royale" egy Battlefield 3 mod, amelynek célja a "last man standing" (mint pl.: PUBG, Fortnite) játékmód elkészítése volt ehhez a játékhoz.`}
              >
                <ListItem>Projektvezető szerep</ListItem>
                <ListItem>UI felületek fejlesztése React használatával</ListItem>
                <ListItem>UI felületek tervezése</ListItem>
                <ListItem>Bemutató weboldal fejlesztése Jekyll használatával</ListItem>
                <ListItem>Mod fejlesztése Lua programozási nyelven</ListItem>
              </WorkPost>
            </Section>
          </View>
          <View style={styles.rightColumn}>
            <Section title='Rólam' spacing={8}>
              <Resume>
                Szakértő szoftverfejlesztő vagyok, akinek több mint 5 év tapasztalata van a front-
                és backend munkákban. Az elmúlt évek során széles körű technológiai
                ismeretekre tettem szert. Jelenleg a webes és a "cross-platform"
                alkalmazásfejlesztésre specializálódom PHP, Laravel, React, Ionic és TypeScript
                használatával. Az innovatív megoldások és a hatékony kódolás iránti
                elkötelezettségem segítségével folyamatosan törekszem az ügyfelek igényeinek teljes
                körű kielégítésére.
              </Resume>
            </Section>
            <Section title='Oktatás és képzés' spacing={8}>
              <EducationPost
                title='Szoftverfejlesztő OKJ'
                subTitle='Jedlik Ányos Gépipari és Informatikai Középiskola és Kollégium'
                startAt='2016'
                endAt='2017'
                location='Győr, Magyarország'
              />
              <EducationPost
                title='Szoftverfejlesztő szak'
                subTitle='Jedlik Ányos Gépipari és Informatikai Középiskola és Kollégium'
                startAt='2011'
                endAt='2015'
                location='Győr, Magyarország'
              />
            </Section>
            <Section title='Nyelvtudás' spacing={12}>
              <Language name='Angol' scoreLabel='B2' score={3} />
            </Section>
            <Section title='Hobbik és érdeklődési területek' spacing={8}>
              <Insight
                title='Játékfejlesztés'
                description='Azon túl, hogy weblapok programozásával foglalkozom, mindig is érdekelt a videójátékok fejlesztése. A játékfejlesztéssel kapcsolatos projekteimről részletes információkat saját weboldalamon találhatóak.'
                iconName='game'
              />
              <Insight
                title='Zene'
                description='Tapasztalatom van a hangtechnika és zenekészítés területén, emellett több éven keresztül DJ-ként is tevékenykedtem.'
                iconName='music'
              />
            </Section>
            <Section title='Találj meg' spacing={0}>
              <View style={{ flexDirection: 'row' }}>
                <SocialMedia
                  name='GitHub'
                  profileUrl='https://github.com/kaloczikvn'
                  style={{ flex: 1 }}
                />
                <SocialMedia
                  name='Személyes honlap'
                  profileUrl='https://kvn.hu'
                  style={{ flex: 1 }}
                />
              </View>
            </Section>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default App;
