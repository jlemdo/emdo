

      
     
      

      
        
       
        
        import * as THREE from "../../build/three.module.js";
        import { OrbitControls } from "../../build/OrbitControls.js";
        import { GLTFLoader } from "../../build/GLTFLoader.js";
        import { RGBELoader } from "../../build/RGBELoader.js";
  
        var camera, scene, renderer;
        var car;
        var gltf_loader = new GLTFLoader();

        
        
       
        var model3 = "gltf/peugeot_3008/scene.gltf";
        
        
        init();
        loop();
        
        function init() {
          const shiba = document.querySelector(".perrito")
          const container = document.createElement("div");
          
          
          shiba.appendChild(container);
          // ------------------------------------ *** ---------------------------------------
          
          
  
          camera = new THREE.PerspectiveCamera(
            30,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
          );
          camera.position.set(100, 0, 0);
  
          scene = new THREE.Scene();
          scene.background = null;
  
          renderer = new THREE.WebGLRenderer({ alpha: true });
          renderer.setPixelRatio(window.devicePixelRatio);
          renderer.setSize(window.innerWidth * 0.3 , window.innerHeight * 0.8);
          renderer.outputEncoding = THREE.sRGBEncoding;
  
          container.appendChild(renderer.domElement);
  
          // LOAD MODEL
          gltf_loader.load(model3, function (gltf) {
            car = gltf.scene;
            gltf.scene.scale.set(15, 15, 15);
            scene.add(gltf.scene);
  
            render();
          });
  
          var light = new THREE.PointLight(0xffffff, 2);
          light.position.set(100, 100, 100);
          scene.add(light);
  
          // LOAD TEXTURE
          // const rgbe_loader = new RGBELoader();
  
          // rgbe_loader.setDataType(THREE.UnsignedByteType);
          // rgbe_loader.load("", function (texture) {
          //   const pmremGenerator = new THREE.PMREMGenerator(renderer);
          //   const envMap = pmremGenerator.fromEquirectangular(texture).texture;
  
          //   scene.background = envMap;
          //   scene.environment = envMap;
  
          //   render();
          // });
  
          // VIEW CONTROLS
          const controls = new OrbitControls(camera, renderer.domElement);
          controls.addEventListener("change", render);
          controls.minDistance = 20;
          controls.maxDistance = 70;
          controls.target.set(0, 0.5, 0);
          controls.mouseButtons = {
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.ROTATE,
          };
          // controls.minPolarAngle = 0;
          // controls.maxPolarAngle = Math.PI / 2;
          controls.update();
  
          window.addEventListener("resize", onWindowResize, false);
        }
  
        // function loadModel(modelPath, x = 0.1, y = 0.1, z = 0.1) {
        //   gltf_loader.load(modelPath, function (gltf) {
        //     scene.remove(car);
        //     car = gltf.scene;
        //     gltf.scene.scale.set(x, y, z);
        //     scene.add(car);
        //     render();
        //   });
        // }
  
        function onWindowResize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          render();
        }
  
        function render() {
          renderer.render(scene, camera);
        }
  
        function loop() {
          requestAnimationFrame(loop);
          car.rotation.y += -0.003;        
          renderer.render(scene, camera);
        }
        
   