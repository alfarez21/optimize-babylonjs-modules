// Math
import { Color4, Color3 } from "@babylonjs/core/Maths/math.color";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Space } from "@babylonjs/core/Maths/math.axis";
import { Angle } from "@babylonjs/core/Maths/math.path";

// Materials
import { CubeTexture, Texture } from "@babylonjs/core/Materials/Textures";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { NodeMaterial } from "@babylonjs/core/Materials/Node/nodeMaterial";
import { InputBlock } from "@babylonjs/core/Materials/Node/Blocks/Input/inputBlock";
import { TransformBlock } from "@babylonjs/core/Materials/Node/Blocks/transformBlock";
import { NodeMaterialSystemValues } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues";
import { VertexOutputBlock } from "@babylonjs/core/Materials/Node/Blocks/Vertex/vertexOutputBlock";
import { FragmentOutputBlock } from "@babylonjs/core/Materials/Node/Blocks/Fragment/fragmentOutputBlock";
import { MultiplyBlock } from "@babylonjs/core/Materials/Node/Blocks/multiplyBlock";
import { AnimatedInputBlockTypes } from "@babylonjs/core/Materials/Node/Blocks/Input/animatedInputBlockTypes";
import { OneMinusBlock } from "@babylonjs/core/Materials/Node/Blocks/oneMinusBlock";
import { TextureBlock } from "@babylonjs/core/Materials/Node/Blocks/Dual/textureBlock";
import { DynamicTexture } from "@babylonjs/core/Materials/Textures/dynamicTexture";

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

// Misc
import { Tools } from "@babylonjs/core/Misc/tools";
import { SceneSerializer } from "@babylonjs/core/Misc/sceneSerializer";
import { ScreenshotTools } from "@babylonjs/core/Misc/screenshotTools";

// Others
import { Engine } from "@babylonjs/core/Engines";
import { Database } from "@babylonjs/core/Offline/database";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { GlowLayer } from "@babylonjs/core/Layers/glowLayer";
import { Scene } from "@babylonjs/core/scene";
import { Ray } from "@babylonjs/core/Culling/ray";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { PointerEventTypes } from "@babylonjs/core/Events/pointerEvents";
import { DefaultCollisionCoordinator } from "@babylonjs/core/Collisions/collisionCoordinator";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { UtilityLayerRenderer } from "@babylonjs/core/Rendering/utilityLayerRenderer";
import { PositionGizmo } from "@babylonjs/core/Gizmos/positionGizmo";
import { RotationGizmo } from "@babylonjs/core/Gizmos/rotationGizmo";
import { EdgesRenderer } from "@babylonjs/core/Rendering/edgesRenderer";
import { SpotLight } from "@babylonjs/core/Lights/spotLight";
import { GLTF2Export } from "@babylonjs/serializers/glTF/2.0/glTFSerializer";

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
    InputBlock,
    NodeMaterial,
    TransformBlock,
    NodeMaterialSystemValues,
    VertexOutputBlock,
    FragmentOutputBlock,
    MultiplyBlock,
    AnimatedInputBlockTypes,
    OneMinusBlock,
    TextureBlock,
    DynamicTexture,

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
    UtilityLayerRenderer,
    PositionGizmo,
    RotationGizmo,
    EdgesRenderer,
    SpotLight,
    Tools,
    GLTF2Export,
    ScreenshotTools,
    SceneSerializer
}

window['BABYLON'] =  BABYLON;
