import React, {useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Categoria from '../../../model/Categoria';
import { buscar } from '../../../services/service';
import CardCategorias from '../CardCategorias/CardCategorias';

function ListaCategorias() {
  const [categoria, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();


  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('Não foi possivel localizar categoria')
      }
    }
  }



  useEffect(() => {
    buscarCategorias();
  }, [categoria.length]);
  return (
    <>
      {categoria.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categorias={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;