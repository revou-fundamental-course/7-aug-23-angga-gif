        //js luas segitga//
        const alasInput = document.getElementById('alas-input');
        const tinggiInput = document.getElementById('tinggi-input');
        const luasInput = document.getElementById('luas-input');
        const hitungButton = document.getElementById('hitung-button');
        const resetButton = document.getElementById('reset-button');

        
        hitungButton.addEventListener('click', () => {
            
            const alas = parseFloat(alasInput.value);
            const tinggi = parseFloat(tinggiInput.value);

            
            const luas = 0.5 * alas * tinggi;

            
            luasInput.value = luas;
        });

      
        resetButton.addEventListener('click', () => {
            alasInput.value = ''; 
            tinggiInput.value = ''; 
            luasInput.value = ''; 
        });

        //js untuk keliling segitiga
        const sisi1Input = document.getElementById('sisi-1');
        const sisi2Input = document.getElementById('sisi-2');
        const sisi3Input = document.getElementById('sisi-3');
        const kelilingInput = document.getElementById('keliling-input');
        const hitungKelilingButton = document.getElementById('hitung-keliling');
        const resetKelilingButton = document.getElementById('reset-keliling');
        
        
        hitungKelilingButton.addEventListener('click', () => {
            
            const sisi1 = parseFloat(sisi1Input.value);
            const sisi2 = parseFloat(sisi2Input.value);
            const sisi3 = parseFloat(sisi3Input.value);
        
            
            const keliling = sisi1 + sisi2 + sisi3;
        
            
            kelilingInput.value = keliling;
        });
        
        
        resetKelilingButton.addEventListener('click', () => {
            sisi1Input.value = ''; 
            sisi2Input.value = ''; 
            sisi3Input.value = ''; 
            kelilingInput.value = ''; 
        });
    

        //js untuk scroll web//
        document.addEventListener('DOMContentLoaded', function() {
            const luasButton = document.getElementById('luas-button');
            const kelilingButton = document.getElementById('keliling-button');
          
            luasButton.addEventListener('click', function() {
              document.getElementById('keliling-header').scrollIntoView({ behavior: 'smooth' });
            });
          
            kelilingButton.addEventListener('click', function() {
              document.getElementById('luas-header').scrollIntoView({ behavior: 'smooth' });
            });
          });


          
          