import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  setEyeHeight,
  setEyeSize,
  setEyeSpacing,
  setEyeType,
  setMouthHeight,
  setMouthXPosition,
  setMouthSize,
  setMouthType,
  setMouthYPosition,
  setMouthWidth,
} from '../../slices/avatarSlice'
import { Avatar } from '../Avatar/Avatar'
import { IconButton } from '../IconButton/IconButton'
import { Slider } from '../Slider/Slider'
import { TabButton } from '../TabView/TabButton'
import { TabButtons } from '../TabView/TabButtons'
import { TabPanel } from '../TabView/TabPanel'
import { TabPanels } from '../TabView/TabPanels'
import { TabView } from '../TabView/TabView'

export function AvatarEditor() {
  const { eye, mouth } = useAppSelector((state) => state.avatar)
  const dispatch = useAppDispatch()

  return (
    <div className="rounded-xl shadow-md flex flex-col items-center">
      <div className="p-4">
        <Avatar eye={eye} mouth={mouth} />
      </div>
      <div className="p-4 w-full bg-gray-100 border-t space-y-4">
        <TabView>
          <TabButtons>
            <TabButton>
              <i className="fa-solid fa-eye"></i>
            </TabButton>
            <TabButton>
              <i className="fa-solid fa-circle-half-stroke rotate-90"></i>
            </TabButton>
          </TabButtons>
          <TabPanels>
            <TabPanel>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Type</span>
                  <div className="flex space-x-2">
                    <IconButton
                      isActive={eye.type === 'round'}
                      onClick={() => dispatch(setEyeType('round'))}
                    >
                      <div className="bg-black w-4 h-4 rounded-full"></div>
                    </IconButton>
                    <IconButton
                      isActive={eye.type === 'happy'}
                      onClick={() => dispatch(setEyeType('happy'))}
                    >
                      <div className="bg-black rounded-[1rem_1rem_0_0] w-4 h-2"></div>
                    </IconButton>
                    <IconButton
                      isActive={eye.type === 'flat'}
                      onClick={() => dispatch(setEyeType('flat'))}
                    >
                      <div className="rounded-full bg-black w-4 h-2"></div>
                    </IconButton>
                  </div>
                </div>
                <Slider
                  fullWidth
                  label="Height"
                  value={eye.height}
                  onChange={(e) =>
                    dispatch(setEyeHeight(Number(e.target.value)))
                  }
                  min={0}
                  max={30}
                />
                <Slider
                  fullWidth
                  label="Size"
                  value={eye.size}
                  onChange={(e) => dispatch(setEyeSize(Number(e.target.value)))}
                  min={1}
                  max={30}
                />
                <Slider
                  fullWidth
                  label="Spacing"
                  value={eye.spacing}
                  onChange={(e) =>
                    dispatch(setEyeSpacing(Number(e.target.value)))
                  }
                  min={0}
                  max={40}
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Type</span>
                  <div className="flex space-x-2">
                    <IconButton
                      isActive={mouth.type === 'happy'}
                      onClick={() => dispatch(setMouthType('happy'))}
                    >
                      <div className="bg-black rounded-[0_0_1rem_1rem] w-4 h-2"></div>
                    </IconButton>
                    <IconButton
                      isActive={mouth.type === 'flat'}
                      onClick={() => dispatch(setMouthType('flat'))}
                    >
                      <div className="rounded-full bg-black w-4 h-2"></div>
                    </IconButton>
                  </div>
                </div>
                <Slider
                  fullWidth
                  label="Height"
                  value={mouth.height}
                  onChange={(e) =>
                    dispatch(setMouthHeight(Number(e.target.value)))
                  }
                  min={5}
                  max={30}
                />
                <Slider
                  fullWidth
                  label="Width"
                  value={mouth.width}
                  onChange={(e) =>
                    dispatch(setMouthWidth(Number(e.target.value)))
                  }
                  min={5}
                  max={30}
                />
                <Slider
                  fullWidth
                  label="X Offset"
                  value={mouth.xPosition}
                  onChange={(e) =>
                    dispatch(setMouthXPosition(Number(e.target.value)))
                  }
                  min={-20}
                  max={20}
                />
                <Slider
                  fullWidth
                  label="Y Offset"
                  value={mouth.yPosition}
                  onChange={(e) =>
                    dispatch(setMouthYPosition(Number(e.target.value)))
                  }
                  min={-20}
                  max={20}
                />
                <Slider
                  fullWidth
                  label="Size"
                  value={mouth.size}
                  onChange={(e) =>
                    dispatch(setMouthSize(Number(e.target.value)))
                  }
                  min={10}
                  max={60}
                />
              </div>
            </TabPanel>
          </TabPanels>
        </TabView>
      </div>
    </div>
  )
}
