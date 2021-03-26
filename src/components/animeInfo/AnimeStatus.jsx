import React, { useContext, useEffect, useState } from "react";
import animeContext from "../../context/anime/animeContext";
import useAniContext from "../../context/usersAnimes/useAniContext";
import {
  AnimeStatusStyled,
  StatusSelect,
  InputStatus,
  Button,
  SecondaryButton,
} from "../../styles/animeInfoStyles/animeStatus.styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const AnimeStatus = () => {
  const { currentAnime } = useContext(animeContext);
  const {
    mensaje,
    isAdded,
    userAnime,
    addAnime,
    getAnimeFromList,
    cleanGetAnimeFL,
    updateAnimeStatus,
    removeAnime
  } = useContext(useAniContext);

  const { animeId } = useParams();

  useEffect(() => {
    getAnimeFromList(animeId);

    if (mensaje.type === "success")
      return toast.success(mensaje.msg, { hideProgressBar: true });
    else if (mensaje.type === "error")
      return toast.error(mensaje.msg, { hideProgressBar: true });

    return () => cleanGetAnimeFL();
    // eslint-disable-next-line
  }, [mensaje]);

  const [data, setData] = useState({
    mal_id: currentAnime.mal_id,
    title: currentAnime.title,
    episodes: currentAnime.episodes,
    image_url: currentAnime.image_url,
    type: currentAnime.type,
    status: "",
    score: "",
    progress: "",
  });

  const {
    mal_id,
    title,
    episodes,
    image_url,
    type,
    status,
    score,
    progress,
  } = data;

  const [updating, setUpdating] = useState(false);

  let maxEpisodes = 10;

  if (currentAnime) {
    maxEpisodes = currentAnime.episodes;
  }

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setData((data) => ({
      ...data,
      [name]: value,
    }));

    if (name === "status" && value === "completed") {
      setData((data) => ({
        ...data,
        progress: maxEpisodes,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAdded && status === "")
      return toast.warn("Status is requiered", { hideProgressBar: true });

    if (isAdded) {
      updateAnimeStatus(data, userAnime.id);
    } else {
      // addAnime(data);
      addAnime({
        mal_id,
        title,
        episodes,
        image_url,
        type,
        status: "plan_to_watch",
        score: 0,
        progress: 0,
      });
    }

    setUpdating(false);
  };

  const handleUpdateChange = (e) => {
    setData((data) => ({
      ...data,
      status: userAnime.status,
      score: userAnime.score,
      progress: userAnime.progress,
    }));
    setUpdating(true);
  };

  let margin;

  if (isAdded && updating === true) {
    margin = "25px auto";
  } else {
    margin = "25px 0";
  }

  return (
    <AnimeStatusStyled onSubmit={handleSubmit} margin={margin}>
      {isAdded && userAnime ? (
        <>
          {updating ? (
            <>
              <StatusSelect
                name="status"
                value={status}
                onChange={handleChange}
              >
                <option value="">-- Status --</option>
                <option value="watching">Watching</option>
                <option value="plan_to_watch">Plan to Watch</option>
                <option value="completed">Completed</option>
                <option value="rewatching">Rewatching</option>
                <option value="paused">Paused</option>
                <option value="dropped">Dropped</option>
              </StatusSelect>

              <InputStatus
                name="score"
                type="number"
                min="0"
                max="10"
                value={score}
                margin={"0 25px"}
                onChange={handleChange}
              />

              <InputStatus
                name="progress"
                type="number"
                min="0"
                max={maxEpisodes}
                value={progress}
                onChange={handleChange}
              />

              <Button onClick={handleSubmit}>Save</Button>
              <Button onClick={() => removeAnime(userAnime.id)}>Remove Anime</Button>
              <Button onClick={() => setUpdating(false)}>Cancel</Button>
            </>
          ) : (
            <>
              <SecondaryButton onClick={handleUpdateChange}>
                Update
              </SecondaryButton>
            </>
          )}
        </>
      ) : (
        <SecondaryButton onClick={handleSubmit}>Add Anime</SecondaryButton>
      )}
      <ToastContainer position="top-left" />
    </AnimeStatusStyled>
  );
};

export default AnimeStatus;
