import { 
  // Maths
  Color4,
  Color3,
  Vector3,
  Space,
  Angle,
  Matrix,
    
  // Materials
  StandardMaterial,
  CubeTexture,
  Texture,
  VideoTexture,
  
  // Meshes
  TransformNode,
  Mesh,
  AbstractMesh,
  MeshBuilder,

  Animation,
  CubicEase,
  EasingFunction,

  // Camera
  FreeCameraKeyboardMoveInput,
  ArcRotateCamera,
  FreeCamera,
  Camera,

  // Others
  Database,
  Engine,
  SceneLoader,
  Scene,
  Ray,
  PointerEventTypes,
  HemisphericLight,
  GlowLayer,
  PositionGizmo,
  RotationGizmo,
  Tools,
  SceneSerializer,
  DefaultCollisionCoordinator,
  EdgesRenderer,
  PostProcessesOptimization,
  ScreenshotTools,
  BoundingInfo,
  HighlightLayer,
  CSG,
  DirectionalLight,
  SpotLight,
  ShadowGenerator,
  RayHelper,
  SceneOptimizerOptions,
  RenderTargetTexture,
  ParticlesOptimization,
  TextureOptimization,
  SceneOptimizer
} from "@babylonjs/core";

import { AdvancedDynamicTexture, TextBlock } from "@babylonjs/gui";
import { GLTF2Export } from "@babylonjs/serializers";
import { ShadowOnlyMaterial } from "@babylonjs/materials";
import "@babylonjs/loaders/glTF";

const BABYLON: any = {   
  // Maths
  Color4,
  Color3,
  Vector3,
  Space,
  Angle,
  Matrix,

  // Materials
  StandardMaterial,
  CubeTexture,
  Texture,
  VideoTexture,
  ShadowOnlyMaterial,
  
  // Meshes
  TransformNode,
  Mesh,
  AbstractMesh,
  MeshBuilder,

  // Lights
  HemisphericLight,
  DirectionalLight,
  SpotLight,

  // GUI 2D
  GUI: {
    AdvancedDynamicTexture,
    TextBlock,
  },
  
  // Animations
  Animation,
  CubicEase,
  EasingFunction,

  // Camera
  FreeCameraKeyboardMoveInput,
  ArcRotateCamera,
  FreeCamera,
  Camera,

  // Others
  Database,
  Engine,
  SceneLoader,
  Scene,
  Ray,
  RayHelper,
  PointerEventTypes,
  GlowLayer,
  PositionGizmo,
  RotationGizmo,
  Tools,
  GLTF2Export,
  SceneSerializer,
  DefaultCollisionCoordinator,
  EdgesRenderer,
  ScreenshotTools,
  BoundingInfo,
  HighlightLayer,
  ShadowGenerator,
  SceneOptimizerOptions,
  CSG,
  RenderTargetTexture,
  PostProcessesOptimization,
  ParticlesOptimization,
  TextureOptimization,
  SceneOptimizer
}

window['BABYLON'] =  BABYLON;
