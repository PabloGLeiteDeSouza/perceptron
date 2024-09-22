"use client"
// pages/index.tsx
import { useState } from 'react';
import { getNearestMovie } from '@/services/knn';
import { parseInput } from '@/utils/parseInput';

export default function RecomendacaoDeFilmes() {
  const [violence, setViolence] = useState(0);
  const [action, setAction] = useState(0);
  const [romance, setRomance] = useState(0);
  const [comedy, setComedy] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Arredondando inputs
    const parsedInput = parseInput(violence, action, romance, comedy);

    // Calculando filme mais próximo
    const nearestMovie = getNearestMovie(parsedInput);
    
    setResult(nearestMovie ? nearestMovie.name : "Nenhum filme encontrado");
  };

  return (
    <div className='w-full flex flex-col items-center gap-5 mt-5' > 
      <h1 className='text-3xl'>Recomendador de Filmes</h1>
      <form className='flex flex-col items-center gap-5' onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Violencia:</span>
            </div>
            <input className="input input-bordered w-full max-w-xs" type="number" step="0.1" value={violence} onChange={(e) => setViolence(parseFloat(e.target.value))} />
        </label>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Ação:</span>
            </div>
            <input className="input input-bordered w-full max-w-xs" type="number" step="0.1" value={action} onChange={(e) => setAction(parseFloat(e.target.value))} />
        </label>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Romance:</span>
            </div>
            <input className="input input-bordered w-full max-w-xs" type="number" step="0.1" value={romance} onChange={(e) => setRomance(parseFloat(e.target.value))} />
        </label>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Comédia:</span>
            </div>
            <input className="input input-bordered w-full max-w-xs" type="number" step="0.1" value={comedy} onChange={(e) => setComedy(parseFloat(e.target.value))} />
        </label>
        <button className='btn btn-primary' type="submit">Recomendar Filme</button>
      </form>

      {result && (
        <div>
          <h2>Filme Recomendado:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
