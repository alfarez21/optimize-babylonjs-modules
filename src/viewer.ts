// Math
import { Color4, Color3 } from "@babylonjs/core/Maths/math.color";
import { Vector3, Quaternion } from "@babylonjs/core/Maths/math.vector";
import { Space } from "@babylonjs/core/Maths/math.axis";
import { Angle } from "@babylonjs/core/Maths/math.path";

// Materials
import { CubeTexture, Texture, VideoTexture } from "@babylonjs/core/Materials/Textures";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";

// Actions
import { ActionManager } from "@babylonjs/core/Actions/actionManager";
import { ExecuteCodeAction } from "@babylonjs/core/Actions/directActions";

// Meshes
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { AbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import { Mesh } from "@babylonjs/core/Meshes/mesh";

// GUI 2D
import { AdvancedDynamicTexture } from "@babylonjs/gui/2D/advancedDynamicTexture";
import { TextBlock } from "@babylonjs/gui/2D/controls/textBlock";
import { StackPanel } from "@babylonjs/gui/2D/controls/stackPanel";
import { Container } from "@babylonjs/gui/2D/controls/container";
import { Control } from "@babylonjs/gui/2D/controls/control";
import { TextWrapping } from "@babylonjs/gui/2D/controls/textBlock";

// Animations
import { Animation, CubicEase, EasingFunction } from "@babylonjs/core/Animations";

// Camera
import { FreeCameraKeyboardMoveInput } from "@babylonjs/core/Cameras/Inputs/freeCameraKeyboardMoveInput";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { ArcRotateCameraPointersInput } from "@babylonjs/core/Cameras/Inputs/arcRotateCameraPointersInput";

// Others
import { Engine } from "@babylonjs/core/Engines/engine";
import { Database } from "@babylonjs/core/Offline/database";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { GlowLayer } from "@babylonjs/core/Layers/glowLayer";
import { Scene } from "@babylonjs/core/scene";
import { Ray } from "@babylonjs/core/Culling/ray";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { PointerEventTypes } from "@babylonjs/core/Events/pointerEvents";
import { DefaultCollisionCoordinator } from "@babylonjs/core/Collisions/collisionCoordinator";
import { RayHelper } from "@babylonjs/core/Debug/rayHelper";
import { Matrix } from "@babylonjs/core/Maths/math.vector";
import { BoundingInfo } from "@babylonjs/core/Culling/boundingInfo";


import "@babylonjs/core/Engines/Extensions/engine.externalTexture";
import "@babylonjs/loaders/glTF";

const BABYLON: any = {   
    // Maths
    Color4,
    Color3,
    Vector3,
    Space,
    Angle,
    Quaternion,
    Matrix,
     
    // Materials
    StandardMaterial,
    CubeTexture,
    Texture,
    VideoTexture,

    // Actions
    ActionManager,
    ExecuteCodeAction,
    
    // Meshes
    TransformNode,
    Mesh,
    AbstractMesh,
    MeshBuilder,

    // GUI 2D
    GUI: {
        AdvancedDynamicTexture,
        TextBlock,
        StackPanel,
        Container,
        Control,
        TextWrapping
    },
    
    // Animations
    Animation,
    CubicEase,
    EasingFunction,

    // Camera
    FreeCameraKeyboardMoveInput,
    FreeCamera,
    ArcRotateCameraPointersInput,

    // Others
    Database,
    Engine,
    SceneLoader,
    Scene,
    Ray,
    ArcRotateCamera,
    PointerEventTypes,
    HemisphericLight,
    GlowLayer,
    DefaultCollisionCoordinator,
    RayHelper,
    BoundingInfo
}

window['BABYLON'] =  BABYLON;
