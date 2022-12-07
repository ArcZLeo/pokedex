import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  getBerryTotal,
  getBerryDetailsApi,
  getBerryDetailsByUrlApi,
  getBerriesApi,
} from "../api/berries";
import BerryList from "../components/BerryList";
//import useAuth from "../hooks/useAuth";

export default function BerryDex() {
  const [berries, setBerries] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [load, setLoad] = useState(false);

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    (async () => {
      await loadBerries();
      // await loadPokemonsTotal();
    })();
  }, []);



  const loadBerries = async () => {
    try {
      // const response = await getPokemonsApi(nextUrl);

      const response = await getBerriesApi(nextUrl);

      setNextUrl(response.next);
      const berriesArray = [];
      for await (const berry of response.results) {
        const berryDetailsGeneral = await getBerryDetailsByUrlApi(berry.url);
        //const berryDetails = await getBerryDetailsByUrlApi(berryDetailsGeneral.item.url);
        
        berriesArray.push({
          id: berryDetailsGeneral.id,
          name: berryDetailsGeneral.name,
          image: berryDetailsGeneral.sprites.default,
        });
      }
      

      setBerries([...berries, ...berriesArray]);
      setFilterData([...berries, ...berriesArray]);
      
      setLoad(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <SafeAreaView>  // se coloco esto cuando es vista, pero con la lista no funcionaba , y al hacer scroll, la lista estaba en las notificacion
    // Asi que el SafeArea lo coloque en la lista, y ahi si funcion
    <>
      <BerryList
        berries={berries}
        loadBerries={loadBerries}
        isNext={nextUrl}
        filterData={filterData}
        setFilterData={setFilterData}
        valor={true}
        load={load}
      />
    </>

    // </SafeAreaView>
  );
}
