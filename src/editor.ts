// Math
import { Color4, Color3 } from "@babylonjs/core/Maths/math.color";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Space } from "@babylonjs/core/Maths/math.axis";
import { Angle } from "@babylonjs/core/Maths/math.path";

// Materials
import { CubeTexture } from "@babylonjs/core/Materials/Textures/cubeTexture";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";

// Meshes
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { AbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import { Mesh } from "@babylonjs/core/Meshes/mesh";

// GUI 2D
import { AdvancedDynamicTexture } from "@babylonjs/gui/2D/advancedDynamicTexture";
import { TextBlock } from "@babylonjs/gui/2D/controls/textBlock";

// Animations
import { Animation, CubicEase, EasingFunction } from "@babylonjs/core/Animations";

// Camera
import { FreeCameraKeyboardMoveInput } from "@babylonjs/core/Cameras/Inputs/freeCameraKeyboardMoveInput";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { Camera } from "@babylonjs/core/Cameras/camera"

// Misc
import { Tools } from "@babylonjs/core/Misc/tools";
import { ScreenshotTools } from "@babylonjs/core/Misc/screenshotTools";
import { SceneSerializer } from "@babylonjs/core/Misc/sceneSerializer";

// Others
import { Engine } from "@babylonjs/core/Engines/engine";
import { Database } from "@babylonjs/core/Offline/database";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { GlowLayer } from "@babylonjs/core/Layers/glowLayer";
import { Scene } from "@babylonjs/core/scene";
import { EdgesRenderer } from "@babylonjs/core/Rendering/edgesRenderer";
import { Ray } from "@babylonjs/core/Culling/ray";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { PointerEventTypes } from "@babylonjs/core/Events/pointerEvents";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { PositionGizmo } from "@babylonjs/core/Gizmos/positionGizmo";
import { RotationGizmo } from "@babylonjs/core/Gizmos/rotationGizmo";
import { GLTF2Export } from "@babylonjs/serializers/glTF/2.0/glTFSerializer";
import { DefaultCollisionCoordinator } from "@babylonjs/core/Collisions/collisionCoordinator";
import { BoundingInfo } from "@babylonjs/core/Culling/boundingInfo";

import "@babylonjs/loaders/glTF";
import "@babylonjs/core/Physics/physicsEngineComponent";
import "@babylonjs/core/Engines/thinEngine";

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
  BoundingInfo
}

window['BABYLON'] =  BABYLON;
