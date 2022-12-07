import React, { useState,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {db} from "../database/firebase";


const ref = collection(db, "favorites");

export async function getPokemonsFavoriteApi2(username) {
  const [rtData, setRTData]=useState([]);
  try {
    const querySnapshot = getDocs(collection(db, "favorite")).then((querySnapshot) => {
      const datos=[]
      querySnapshot.forEach((doc) => {
        datos.push({
          ...doc.data(),
          key: doc.id
        })
        setRTData(datos)
      });
    }); 
    for (const i in rtData){
      if (rtData[i].User ==username){
        return (rtData[i]);
      }
    }
  } catch(error){
    throw error;
  }
}

export async function addPokemonFavoriteApi2(id_p,username) {
  try {
    const favorites = await getPokemonsFavoriteApi2(username);
    const list=favorites.id;
    const userDoc = doc(db, "favorites", favorites.key);
    const newFields = { id: list+id_p };
    await updateDoc(userDoc, newFields);
  } catch (error) {
    throw error;
  }
}




export async function getPokemonsFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || "[]");
    // return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const response = await getPokemonsFavoriteApi();
    return includes(response, id);
  } catch (error) {
    throw error;
  }
}

export async function removePokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
}
