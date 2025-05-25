const content = document.getElementById('content');

content.innerHTML = `
  <div class="bckg-box text-center">

    <h1 class="mb-4 fw-bold" style="font-size: 2.5rem; color: #fff;">Vítejte na naší stránce o projektu</h1>

    <p class="mb-4 fs-5 text-white-90">Vyberte si, jestli se chcete dozvědět více o nás nebo o projektu.</p>

   
    <div style="display: flex; flex-direction: row; gap: 2rem; justify-content: center;">

        <div onclick="window.location.href='aboutUs.html'"
                style="display: flex; flex-direction: column; align-items: center; cursor: pointer;">

    
            <div class="image-wrapper">
              <img src="img/musKeyCol.png" alt="O nás" class="rotating-image" />
            </div>


            <div class="image-label">O nás</div>
        </div>


      
 

        <div onclick="window.location.href='aboutProject.html'"
                style="display: flex; flex-direction: column; align-items: center; cursor: pointer;">

        
            <div class="image-wrapper">
               <img src="img/musKeyCol2.png" alt="O projektu" class="rotating-image" />
            </div>


            <div class="image-label">O projektu</div>
        </div>


          
    </div>
</div>

`;
