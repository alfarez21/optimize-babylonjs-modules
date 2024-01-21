import {
    // Math
    Color4,
    Color3,
    Vector3,
    Quaternion,
    Space,
    Angle,

    // Materials
    CubeTexture,
    Texture,
    VideoTexture,
    StandardMaterial,


    // Actions
    ActionManager,
    ExecuteCodeAction,

    // Meshes
    MeshBuilder,
    TransformNode,
    AbstractMesh,
    Mesh,

    // Animations
    Animation,
    CubicEase,
    EasingFunction,

    // Camera
    FreeCameraKeyboardMoveInput,
    FreeCamera,
    ArcRotateCamera,
    ArcRotateCameraPointersInput,

    // Others
    Engine,
    Database,
    SceneLoader,
    GlowLayer,
    Scene,
    Ray,
    HemisphericLight,
    SpotLight,
    PointerEventTypes,
    DefaultCollisionCoordinator,
    RayHelper,
    Matrix,
    BoundingInfo,
    CSG,
    ShadowGenerator,
    RenderTargetTexture,
    PostProcessesOptimization,
    ParticlesOptimization,
    TextureOptimization,
    SceneOptimizer,
    DracoCompression
} from "@babylonjs/core";

// GUI 2D
import { 
    AdvancedDynamicTexture,
    TextBlock,
    StackPanel,
    Container,
    Control,
    TextWrapping 
} from "@babylonjs/gui";

import "@babylonjs/loaders";
import { ShadowOnlyMaterial } from "@babylonjs/materials";


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
    ShadowOnlyMaterial,

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
    BoundingInfo,
    CSG,
    RenderTargetTexture,
    PostProcessesOptimization,
    ParticlesOptimization,
    TextureOptimization,
    SceneOptimizer,
    SpotLight,
    ShadowGenerator,
    DracoCompression
}

window['BABYLON'] =  BABYLON;
