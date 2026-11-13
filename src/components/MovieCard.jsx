function MovieCard({ title, genre, year, rating, available, popular, duration }) {
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <p>ז׳אנר: {genre}</p>
      <p>שנת יציאה: {year}</p>
      <p>דירוג: {rating}</p>
      {typeof duration === "number" && <p>משך הסרט: {duration} דקות </p>}
      {available &&<p>זמין לצפייה</p>}
      {popular &&<p>בחירת הצוות</p>}
    </article>
  );
}

export default MovieCard;

