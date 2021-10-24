import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleError() {
    alert("Sorry, we can't find this word in the dictionary! Try another?");
  }
  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse).catch(handleError);

    // documentation: https://www.pexels.com/api/documentation/#photos-search
    let pexelsApiKey =
      "563492ad6f917000010000010e53e865d9da457d947fafd136c7037e";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>DICTIONARY</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              className="search"
              type="search"
              placeholder="search for a word"
              autoFocus={true}
              onChange={handleKeywordChange}
            />
            <input className="submit" type="submit" value="go" />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
