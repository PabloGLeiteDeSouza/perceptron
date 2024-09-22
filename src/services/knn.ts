// services/knn.ts
import { movies } from '@/constants/data/moviesData';
import { calculateEuclideanDistance } from '../utils/calculateDistance';

export function getNearestMovie(input: { violence: number, action: number, romance: number, comedy: number }) {
  let nearestMovie = null;
  let smallestDistance = Infinity;

  const inputVector = [input.violence, input.action, input.romance, input.comedy];

  for (const movie of movies) {
    const movieVector = [movie.violence, movie.action, movie.romance, movie.comedy];
    const distance = calculateEuclideanDistance(movieVector, inputVector);

    if (distance < smallestDistance) {
      smallestDistance = distance;
      nearestMovie = movie;
    }
  }

  return nearestMovie;
}
