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
  ScreenshotTools,
  BoundingInfo,
  HighlightLayer
} from "@babylonjs/core";

import { AdvancedDynamicTexture, TextBlock } from "@babylonjs/gui";
import { GLTF2Export } from "@babylonjs/serializers";
import "@babylonjs/loaders/glTF";

const BABYLON: any = {   
  // Maths
  Color4,
  Color3,
  Vector3,
  Space,
  Angle,
    
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
  PointerEventTypes,
  HemisphericLight,
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
  HighlightLayer
}

window['BABYLON'] =  BABYLON;